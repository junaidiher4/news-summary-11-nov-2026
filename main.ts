// news-summary-01 entry (Node 22, standard library only): the summary lives in
// summary.txt beside this file; the program copies it to /output/entry.txt.
// Deterministic: no network, no timestamps, no randomness. The output is byte-identical
// on every run because it is a verbatim copy of a static file.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const summary = readFileSync(new URL('./summary.txt', import.meta.url), 'utf8');
if (summary.length < 1 || summary.length > 2000) {
  throw new Error(`summary must be 1-2000 characters, got ${summary.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), summary, 'utf8');
