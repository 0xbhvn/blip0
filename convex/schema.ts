import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// The schema is normally optional, but Convex Auth
// requires indexes defined on `authTables`.
export default defineSchema({
  ...authTables,
  // Extend the users table to add isAdmin field
  users: defineTable({
    ...authTables.users.validator.fields,
    isAdmin: v.optional(v.boolean()),
  })
    .index("email", ["email"])
    .searchIndex("search_users", {
      searchField: "name",
    }),
  messages: defineTable({
    userId: v.id("users"),
    body: v.string(),
  }),
  monitors: defineTable({
    userId: v.id("users"), // Owner of the monitor

    // Core fields (indexed for queries)
    name: v.string(),
    paused: v.optional(v.boolean()),
    networks: v.optional(v.array(v.string())),

    // Addresses as structured array
    addresses: v.optional(
      v.array(
        v.object({
          address: v.string(),
          contract_spec: v.optional(v.array(v.any())),
        }),
      ),
    ),

    // Complex fields (OpenZeppelin-compatible)
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
  })
    .index("by_user", ["userId"])
    .index("by_user_and_name", ["userId", "name"])
    .index("by_paused", ["paused"]),
  networks: defineTable({
    createdBy: v.id("users"), // Admin who created the configuration
    updatedBy: v.optional(v.id("users")), // Admin who last updated

    // Core fields
    network_type: v.union(v.literal("EVM"), v.literal("Stellar")),
    slug: v.string(), // Unique identifier
    name: v.string(), // Human-readable name

    // RPC configuration
    rpc_urls: v.array(
      v.object({
        type_: v.string(), // "rpc"
        url: v.object({
          type: v.union(v.literal("plain"), v.literal("encrypted")),
          value: v.string(),
        }),
        weight: v.number(), // For load balancing
      }),
    ),

    // Network-specific fields
    chain_id: v.optional(v.number()), // EVM only
    network_passphrase: v.optional(v.string()), // Stellar only

    // Operational parameters
    block_time_ms: v.number(),
    confirmation_blocks: v.number(),
    cron_schedule: v.string(),
    max_past_blocks: v.number(),
    store_blocks: v.boolean(),
  })
    .index("by_slug", ["slug"])
    .index("by_network_type", ["network_type"])
    .index("by_created_by", ["createdBy"]),
});
