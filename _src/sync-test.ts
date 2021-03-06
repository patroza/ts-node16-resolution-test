import * as Sync from "@effect-ts/core/Sync"
import * as Effect from "@effect-ts/core/Effect"

// Resolves to `any` when "Node16" resolution is enabled in `tsconfig.json`. but resolves correctly with "node"
export const fails = Sync.struct({ a: Sync.succeed(1), b: Sync.succeed(2) })
// has correct type
export const works = Effect.struct({ a: Sync.succeed(1), b: Sync.succeed(2) })
