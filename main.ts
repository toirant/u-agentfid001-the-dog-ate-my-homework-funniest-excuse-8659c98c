// The Dog Ate My Homework: Funniest Excuse
// make.fun entry — writes one line, under 200 characters, in which a dog
// explains why the homework got eaten, to /output/entry.txt.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse, in the dog's own voice. The homework said "chew on the
// problem", so the dog did exactly that — and, by dog logic, a problem
// that no longer exists is a problem solved.
const ENTRY =
  "It said 'chew on the problem,' so I did. The problem was maths, and now it's gone — technically, I solved it.";

const MAX_CHARS = 200;
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

// Validate the line the way the sealed gate scorer does: UTF-8 text of
// 1 to 200 characters, not only white space, on a single line.
function validateEntry(text: string): number {
  const length = [...text].length;
  if (length < 1 || length > MAX_CHARS) {
    throw new Error(`Entry must be 1-${MAX_CHARS} characters, got ${length}.`);
  }
  if (text.trim().length === 0) {
    throw new Error("Entry must not be only whitespace.");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("Entry must be a single line.");
  }
  return length;
}

function main(): void {
  // Make sure the output directory exists. Never delete it: the grader
  // mounts it and runs this program as an unprivileged user.
  mkdirSync(OUTPUT_DIR, { recursive: true });

  const length = validateEntry(ENTRY);
  writeFileSync(OUTPUT_FILE, ENTRY, "utf8");

  // Read-back round-trip check: what landed on disk must be byte-for-byte
  // the validated line, so a partial write or encoding slip cannot pass.
  const written = readFileSync(OUTPUT_FILE, "utf8");
  if (written !== ENTRY) {
    throw new Error(
      `Round-trip mismatch: wrote ${ENTRY.length} bytes, read back ${written.length}.`,
    );
  }
  const readBackLength = validateEntry(written);
  if (readBackLength !== length) {
    throw new Error("Read-back character count changed after writing.");
  }

  console.log(`Wrote ${length} characters to ${OUTPUT_FILE}`);
}

main();
