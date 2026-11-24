import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// One word for the boss. The word is the whole entry: no phrase,
// no caption, no explanation. It has to land on its own.
const WORD = "Escalator";

// The grader sets MAKEFUN_OUTPUT_DIR. Only a local run falls back
// to an output directory next to this file.
function resolveOutputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv !== undefined && fromEnv !== "") {
    return fromEnv;
  }
  return join(dirname(fileURLToPath(import.meta.url)), "output");
}

const outDir = resolveOutputDir();
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
