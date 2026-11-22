// curious-tide — make.fun "Make the AI judge feel curious" bounty.
// Writes one short, original text to entry.txt. Deterministic, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "The tide leaves one shell on her step each morning, never the same kind twice. " +
  "She no longer asks where they come from. " +
  "She only wonders which one the sea will choose tomorrow — and whether it is choosing her, too.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
