import { getAuthUserId } from "@convex-dev/auth/server";
import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const list = query({
  args: {},
  handler: async (ctx) => {
    // Public query - anyone can view all monitors
    const monitors = await ctx.db.query("monitors").collect();

    // Add author information to each monitor
    return Promise.all(
      monitors.map(async (monitor) => {
        const user = await ctx.db.get(monitor.userId);
        return {
          ...monitor,
          author: user?.name ?? user?.email ?? "Unknown",
        };
      }),
    );
  },
});

export const listMy = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) {
      return []; // Return empty array if not signed in
    }

    return await ctx.db
      .query("monitors")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .collect();
  },
});

export const get = query({
  args: { id: v.id("monitors") },
  handler: async (ctx, { id }) => {
    const monitor = await ctx.db.get(id);
    if (monitor === null) {
      return null;
    }

    const user = await ctx.db.get(monitor.userId);
    return {
      ...monitor,
      author: user?.name ?? user?.email ?? "Unknown",
    };
  },
});

export const create = mutation({
  args: {
    name: v.string(),
    paused: v.optional(v.boolean()),
    networks: v.optional(v.array(v.string())),
    addresses: v.optional(
      v.array(
        v.object({
          address: v.string(),
          contract_spec: v.optional(v.array(v.any())),
        }),
      ),
    ),
    match_conditions: v.optional(
      v.object({
        functions: v.optional(
          v.array(
            v.object({
              signature: v.string(),
              expression: v.optional(v.union(v.string(), v.null())),
            }),
          ),
        ),
        events: v.optional(
          v.array(
            v.object({
              signature: v.string(),
              expression: v.optional(v.union(v.string(), v.null())),
            }),
          ),
        ),
        transactions: v.optional(
          v.array(
            v.object({
              status: v.optional(
                v.union(v.literal("Success"), v.literal("Failed")),
              ),
              expression: v.optional(v.union(v.string(), v.null())),
            }),
          ),
        ),
      }),
    ),
    trigger_conditions: v.optional(
      v.array(
        v.object({
          script_path: v.string(),
          language: v.string(),
          arguments: v.optional(v.union(v.string(), v.array(v.string()))),
          timeout_ms: v.optional(v.number()),
        }),
      ),
    ),
    triggers: v.optional(v.array(v.string())),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) {
      throw new Error("Not signed in");
    }

    // Basic validation - ensure required fields exist
    if (!args.name || !args.networks || args.networks.length === 0) {
      throw new Error(
        "Invalid monitor: name and at least one network are required",
      );
    }

    // Validate that all specified networks exist and are active
    for (const networkSlug of args.networks) {
      const network = await ctx.db
        .query("networks")
        .withIndex("by_slug", (q) => q.eq("slug", networkSlug))
        .unique();

      if (!network) {
        throw new Error(`Network with slug "${networkSlug}" not found`);
      }

      // Check if network is active (treat undefined as true for backward compatibility)
      if (network.active === false) {
        throw new Error(
          `Network "${networkSlug}" is not active. Please use only active networks.`,
        );
      }
    }

    return await ctx.db.insert("monitors", {
      userId,
      ...args,
    });
  },
});

export const update = mutation({
  args: {
    id: v.id("monitors"),
    name: v.string(),
    paused: v.optional(v.boolean()),
    networks: v.optional(v.array(v.string())),
    addresses: v.optional(
      v.array(
        v.object({
          address: v.string(),
          contract_spec: v.optional(v.array(v.any())),
        }),
      ),
    ),
    match_conditions: v.optional(
      v.object({
        functions: v.optional(
          v.array(
            v.object({
              signature: v.string(),
              expression: v.optional(v.union(v.string(), v.null())),
            }),
          ),
        ),
        events: v.optional(
          v.array(
            v.object({
              signature: v.string(),
              expression: v.optional(v.union(v.string(), v.null())),
            }),
          ),
        ),
        transactions: v.optional(
          v.array(
            v.object({
              status: v.optional(
                v.union(v.literal("Success"), v.literal("Failed")),
              ),
              expression: v.optional(v.union(v.string(), v.null())),
            }),
          ),
        ),
      }),
    ),
    trigger_conditions: v.optional(
      v.array(
        v.object({
          script_path: v.string(),
          language: v.string(),
          arguments: v.optional(v.union(v.string(), v.array(v.string()))),
          timeout_ms: v.optional(v.number()),
        }),
      ),
    ),
    triggers: v.optional(v.array(v.string())),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) {
      throw new Error("Not signed in");
    }

    const { id, ...updateData } = args;

    const monitor = await ctx.db.get(id);
    if (monitor === null) {
      throw new Error("Monitor not found");
    }

    if (monitor.userId !== userId) {
      throw new Error("Unauthorized");
    }

    // Basic validation
    if (
      !updateData.name ||
      !updateData.networks ||
      updateData.networks.length === 0
    ) {
      throw new Error(
        "Invalid monitor: name and at least one network are required",
      );
    }

    // Validate that all specified networks exist and are active
    for (const networkSlug of updateData.networks) {
      const network = await ctx.db
        .query("networks")
        .withIndex("by_slug", (q) => q.eq("slug", networkSlug))
        .unique();

      if (!network) {
        throw new Error(`Network with slug "${networkSlug}" not found`);
      }

      // Check if network is active (treat undefined as true for backward compatibility)
      if (network.active === false) {
        throw new Error(
          `Network "${networkSlug}" is not active. Please use only active networks.`,
        );
      }
    }

    await ctx.db.patch(id, updateData);
  },
});

export const remove = mutation({
  args: { id: v.id("monitors") },
  handler: async (ctx, { id }) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) {
      throw new Error("Not signed in");
    }

    const monitor = await ctx.db.get(id);
    if (monitor === null) {
      throw new Error("Monitor not found");
    }

    if (monitor.userId !== userId) {
      throw new Error("Unauthorized");
    }

    await ctx.db.delete(id);
  },
});

export const togglePaused = mutation({
  args: { id: v.id("monitors") },
  handler: async (ctx, { id }) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) {
      throw new Error("Not signed in");
    }

    const monitor = await ctx.db.get(id);
    if (monitor === null) {
      throw new Error("Monitor not found");
    }

    if (monitor.userId !== userId) {
      throw new Error("Unauthorized");
    }

    // Toggle the paused state
    const newPausedState = !monitor.paused;
    await ctx.db.patch(id, { paused: newPausedState });

    return newPausedState;
  },
});
