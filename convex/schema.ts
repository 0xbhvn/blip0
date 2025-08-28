import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// The schema is normally optional, but Convex Auth
// requires indexes defined on `authTables`.
export default defineSchema({
  ...authTables,
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
});
