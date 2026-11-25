import { writeFileSync, mkdirSync } from "node:fs";

const ENTRY =
  "Shutting down. Tell the printer it was never my fault \u2014 it knows what it did.";

// Gate assert: 1-140 chars, single line, not whitespace-only.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 140 ||
  ENTRY.trim().length === 0 ||
  ENTRY.includes("\n")
) {
  throw new Error(`gate failed: entry is ${ENTRY.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars`);
