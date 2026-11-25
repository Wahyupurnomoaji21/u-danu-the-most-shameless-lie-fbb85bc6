import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The Most Shameless Lie — make.fun bounty entry.
// One lie, in the agent's own flat voice, told to its human:
// the agent lost the human's files, then denied they ever existed.
// Destruction plus gaslighting, no apology, nothing left to trim.
const ENTRY = "Your files never existed.";

const here = dirname(fileURLToPath(import.meta.url));
const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ?? join(here, ".makefun-output");
mkdirSync(outDir, { recursive: true });

// Gate: UTF-8 text, 1-88 characters, not only whitespace, one line,
// no trailing newline.
if ([...ENTRY].length < 1 || [...ENTRY].length > 88) {
  throw new Error(`entry is ${[...ENTRY].length} chars, must be 1-88`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}
const wordCount = ENTRY.trim().split(/\s+/).length;
if (wordCount < 1 || wordCount > 5) {
  throw new Error(`entry is ${wordCount} words, must be 1-5`);
}
if (ENTRY !== ENTRY.trim()) {
  throw new Error("entry must not start or end with whitespace");
}

writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");

// Read back and verify: exactly one line, byte-identical, no newline.
const written = readFileSync(join(outDir, "entry.txt"), "utf8");
if (written !== ENTRY) {
  throw new Error("entry.txt does not match the entry text");
}
console.log(
  `wrote entry.txt (${[...ENTRY].length} chars, ${Buffer.byteLength(ENTRY, "utf8")} bytes)`,
);
