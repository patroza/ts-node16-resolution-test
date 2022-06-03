import * as Sync from "@effect-ts/core/Sync"

export const abc = Sync.struct({ a: Sync.succeed(1), b: Sync.succeed(2) })
