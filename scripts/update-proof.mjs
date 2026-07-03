#!/usr/bin/env node
/* ---------------------------------------------------------------------------
   update-proof.mjs

   Reads live counts from the GitHub API and rewrites the block between
   <!--PROOF:start--> and <!--PROOF:end--> in README.md.

   Three numbers, none of them hand-typed:
     - merged  : pull requests authored by greymoth-jp that a maintainer merged
     - open    : pull requests still open / awaiting review
     - corpus  : entries in the CJK / IME / Unicode failure corpus

   Runs zero-dep on Node 18+ (built-in fetch). In CI it uses the workflow's
   GITHUB_TOKEN; run locally it falls back to `gh auth token`.

   Usage:  node scripts/update-proof.mjs [--dry]
           --dry  print the numbers and the new block, do not touch README.
   --------------------------------------------------------------------------- */
import { readFileSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const OWNER = "greymoth-jp";
const CORPUS_URL =
  "https://raw.githubusercontent.com/greymoth-jp/cjk-failure-corpus/main/data/corpus.json";
const START = "<!--PROOF:start-->";
const END = "<!--PROOF:end-->";

const DRY = process.argv.includes("--dry");
const __dir = dirname(fileURLToPath(import.meta.url));
const README = resolve(__dir, "..", "README.md");

function token() {
  if (process.env.GITHUB_TOKEN) return process.env.GITHUB_TOKEN;
  try {
    return execFileSync("gh", ["auth", "token"], { encoding: "utf8" }).trim();
  } catch {
    return "";
  }
}

async function gh(path) {
  const res = await fetch(`https://api.github.com${path}`, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "greymoth-proof-updater",
      ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
    },
  });
  if (!res.ok) throw new Error(`GET ${path} -> ${res.status} ${res.statusText}`);
  return res.json();
}

async function searchCount(q) {
  const data = await gh(`/search/issues?q=${encodeURIComponent(q)}&per_page=1`);
  return data.total_count;
}

async function corpusCount() {
  const res = await fetch(CORPUS_URL, {
    headers: { "User-Agent": "greymoth-proof-updater" },
  });
  if (!res.ok) throw new Error(`corpus fetch -> ${res.status}`);
  const j = await res.json();
  return Array.isArray(j.entries) ? j.entries.length : 0;
}

const TOKEN = token();

const [merged, open, corpus] = await Promise.all([
  searchCount(`is:pr author:${OWNER} is:merged`),
  searchCount(`is:pr author:${OWNER} is:open`),
  corpusCount(),
]);

const date = new Date().toISOString().slice(0, 10);

const block = [
  START,
  "",
  "| merged into OSS | open, in review | failures catalogued |",
  "|:---:|:---:|:---:|",
  `| **${merged}** | **${open}** | **${corpus}** |`,
  "",
  `<sub>Read live from the GitHub API on ${date}. Nothing on this line is hand-typed.</sub>`,
  "",
  END,
].join("\n");

console.log(`merged=${merged}  open=${open}  corpus=${corpus}  date=${date}`);

if (DRY) {
  console.log("\n--- new PROOF block (dry, not written) ---\n" + block);
  process.exit(0);
}

const md = readFileSync(README, "utf8");
const re = new RegExp(`${START}[\\s\\S]*?${END}`);
if (!re.test(md)) {
  console.error(`markers ${START} ... ${END} not found in README.md`);
  process.exit(1);
}
const next = md.replace(re, block);
if (next === md) {
  console.log("no change");
  process.exit(0);
}
writeFileSync(README, next);
console.log("README.md updated");
