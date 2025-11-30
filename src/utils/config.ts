"server only"

import { BlockfrostProvider } from "@meshsdk/core"

export const provider = new BlockfrostProvider(process.env.BLOCKFROST_API_KEY||'');