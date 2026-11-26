// The Funniest Honest Appliance Error
// Writes one honest error message a washing machine could show
// to /output/entry.txt (MAKEFUN_OUTPUT_DIR overrides /output outside the grader).
// Gate: UTF-8 text of 1..200 characters, not only whitespace.
// The laugh comes from the truth of the fault: every household has lost a
// sock to the machine, and the machine blaming the void is the honest part.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "ERROR 404: Sock not found. It was never in the drum. It is in the void now. Please stop opening the door.";

// Gate guard: single line, file content (entry + newline) within 1..200 chars.
if (entry.includes("\n") || entry.trim().length === 0 || entry.length + 1 > 200) {
  throw new Error(`entry breaks the gate: ${entry.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry + "\n", "utf8");
console.log(entry);
