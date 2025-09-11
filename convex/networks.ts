import { getAuthUserId } from "@convex-dev/auth/server";
import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { Id } from "./_generated/dataModel";

// Helper to check if user is admin
async function isAdmin(
  ctx: {
    db: { get: (id: Id<"users">) => Promise<{ isAdmin?: boolean } | null> };
  },
  userId: Id<"users">,
) {
  const user = await ctx.db.get(userId);
  return user?.isAdmin === true;
}

// Public query - shows only active networks to everyone
export const list = query({
  args: {},
  handler: async (ctx) => {
    // Only show active networks (treat undefined as true for backward compatibility)
    const networks = await ctx.db
      .query("networks")
      .filter((q) =>
        q.or(q.eq(q.field("active"), true), q.eq(q.field("active"), undefined)),
      )
      .collect();

    // Add creator information to each network
    return Promise.all(
      networks.map(async (network) => {
        const creator = await ctx.db.get(network.createdBy);
        const updater = network.updatedBy
          ? await ctx.db.get(network.updatedBy)
          : null;
        return {
          ...network,
          createdByName: creator?.name ?? creator?.email ?? "Unknown",
          updatedByName: updater
            ? (updater.name ?? updater.email ?? "Unknown")
            : null,
        };
      }),
    );
  },
});

// Admin query - shows all networks including inactive ones
export const listAll = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId || !(await isAdmin(ctx, userId))) {
      throw new Error("Unauthorized: Admin access required");
    }

    const networks = await ctx.db.query("networks").collect();

    // Add creator information to each network
    return Promise.all(
      networks.map(async (network) => {
        const creator = await ctx.db.get(network.createdBy);
        const updater = network.updatedBy
          ? await ctx.db.get(network.updatedBy)
          : null;
        return {
          ...network,
          createdByName: creator?.name ?? creator?.email ?? "Unknown",
          updatedByName: updater
            ? (updater.name ?? updater.email ?? "Unknown")
            : null,
        };
      }),
    );
  },
});

// Get a specific network by ID
export const get = query({
  args: { id: v.id("networks") },
  handler: async (ctx, { id }) => {
    const network = await ctx.db.get(id);
    if (network === null) {
      return null;
    }

    // Check if network is active (treat undefined as true for backward compatibility)
    if (network.active === false) {
      const userId = await getAuthUserId(ctx);
      if (!userId || !(await isAdmin(ctx, userId))) {
        return null; // Non-admins can't see inactive networks
      }
    }

    const creator = await ctx.db.get(network.createdBy);
    const updater = network.updatedBy
      ? await ctx.db.get(network.updatedBy)
      : null;
    return {
      ...network,
      createdByName: creator?.name ?? creator?.email ?? "Unknown",
      updatedByName: updater
        ? (updater.name ?? updater.email ?? "Unknown")
        : null,
    };
  },
});

// Get network by slug
export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, { slug }) => {
    const network = await ctx.db
      .query("networks")
      .withIndex("by_slug", (q) => q.eq("slug", slug))
      .unique();

    if (network === null) {
      return null;
    }

    // Check if network is active (treat undefined as true for backward compatibility)
    if (network.active === false) {
      const userId = await getAuthUserId(ctx);
      if (!userId || !(await isAdmin(ctx, userId))) {
        return null; // Non-admins can't see inactive networks
      }
    }

    const creator = await ctx.db.get(network.createdBy);
    const updater = network.updatedBy
      ? await ctx.db.get(network.updatedBy)
      : null;
    return {
      ...network,
      createdByName: creator?.name ?? creator?.email ?? "Unknown",
      updatedByName: updater
        ? (updater.name ?? updater.email ?? "Unknown")
        : null,
    };
  },
});

// Create network - admin only
export const create = mutation({
  args: {
    network_type: v.union(v.literal("EVM"), v.literal("Stellar")),
    slug: v.string(),
    name: v.string(),
    active: v.optional(v.boolean()),
    rpc_urls: v.array(
      v.object({
        type_: v.string(),
        url: v.object({
          type: v.union(v.literal("plain"), v.literal("encrypted")),
          value: v.string(),
        }),
        weight: v.number(),
      }),
    ),
    chain_id: v.optional(v.number()),
    network_passphrase: v.optional(v.string()),
    block_time_ms: v.number(),
    confirmation_blocks: v.number(),
    cron_schedule: v.string(),
    max_past_blocks: v.number(),
    store_blocks: v.boolean(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) {
      throw new Error("Not signed in");
    }

    // Check if user is admin
    if (!(await isAdmin(ctx, userId))) {
      throw new Error("Unauthorized: Admin access required");
    }

    // Validate network-specific fields
    if (args.network_type === "EVM" && !args.chain_id) {
      throw new Error("chain_id is required for EVM networks");
    }
    if (args.network_type === "Stellar" && !args.network_passphrase) {
      throw new Error("network_passphrase is required for Stellar networks");
    }

    // Check if slug already exists
    const existing = await ctx.db
      .query("networks")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .unique();

    if (existing) {
      throw new Error(`Network with slug "${args.slug}" already exists`);
    }

    return await ctx.db.insert("networks", {
      ...args,
      active: args.active ?? false, // Default to false if not specified
      createdBy: userId,
    });
  },
});

// Update network - admin only
export const update = mutation({
  args: {
    id: v.id("networks"),
    network_type: v.union(v.literal("EVM"), v.literal("Stellar")),
    slug: v.string(),
    name: v.string(),
    active: v.optional(v.boolean()),
    rpc_urls: v.array(
      v.object({
        type_: v.string(),
        url: v.object({
          type: v.union(v.literal("plain"), v.literal("encrypted")),
          value: v.string(),
        }),
        weight: v.number(),
      }),
    ),
    chain_id: v.optional(v.number()),
    network_passphrase: v.optional(v.string()),
    block_time_ms: v.number(),
    confirmation_blocks: v.number(),
    cron_schedule: v.string(),
    max_past_blocks: v.number(),
    store_blocks: v.boolean(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) {
      throw new Error("Not signed in");
    }

    // Check if user is admin
    if (!(await isAdmin(ctx, userId))) {
      throw new Error("Unauthorized: Admin access required");
    }

    const { id, ...updateData } = args;

    const network = await ctx.db.get(id);
    if (network === null) {
      throw new Error("Network not found");
    }

    // Validate network-specific fields
    if (updateData.network_type === "EVM" && !updateData.chain_id) {
      throw new Error("chain_id is required for EVM networks");
    }
    if (
      updateData.network_type === "Stellar" &&
      !updateData.network_passphrase
    ) {
      throw new Error("network_passphrase is required for Stellar networks");
    }

    // Check if slug is being changed and if new slug already exists
    if (network.slug !== updateData.slug) {
      const existing = await ctx.db
        .query("networks")
        .withIndex("by_slug", (q) => q.eq("slug", updateData.slug))
        .unique();

      if (existing) {
        throw new Error(
          `Network with slug "${updateData.slug}" already exists`,
        );
      }
    }

    await ctx.db.patch(id, {
      ...updateData,
      updatedBy: userId,
    });
  },
});

// Delete network - admin only
export const remove = mutation({
  args: { id: v.id("networks") },
  handler: async (ctx, { id }) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) {
      throw new Error("Not signed in");
    }

    // Check if user is admin
    if (!(await isAdmin(ctx, userId))) {
      throw new Error("Unauthorized: Admin access required");
    }

    const network = await ctx.db.get(id);
    if (network === null) {
      throw new Error("Network not found");
    }

    await ctx.db.delete(id);
  },
});

// Toggle network active state - admin only
export const toggleActive = mutation({
  args: { id: v.id("networks") },
  handler: async (ctx, { id }) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) {
      throw new Error("Not signed in");
    }

    // Check if user is admin
    if (!(await isAdmin(ctx, userId))) {
      throw new Error("Unauthorized: Admin access required");
    }

    const network = await ctx.db.get(id);
    if (network === null) {
      throw new Error("Network not found");
    }

    // Toggle the active state (treat undefined as true)
    const currentActive = network.active !== false;
    const newActiveState = !currentActive;

    await ctx.db.patch(id, {
      active: newActiveState,
      updatedBy: userId,
    });

    return newActiveState;
  },
});

// Check if current user is admin
export const isCurrentUserAdmin = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) {
      return false;
    }
    return await isAdmin(ctx, userId);
  },
});
