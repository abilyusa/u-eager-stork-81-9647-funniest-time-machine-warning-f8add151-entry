// Funniest Time Machine Warning Label — one-line entry.
// Writes the warning label to $MAKEFUN_OUTPUT_DIR/entry.txt
// (fallback /output/entry.txt), exactly as the grader expects.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "WARNING: If you have read this label before, you are already in a time loop.";

// Gate: UTF-8 text of 1 to 120 characters, not only whitespace, one line.
// Count code points, the way the scorer counts characters.
const len = [...LINE].length;
if (len < 1 || len > 120) {
  throw new Error(`line is ${len} characters, gate is 1-120`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("line must be a single non-empty line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
