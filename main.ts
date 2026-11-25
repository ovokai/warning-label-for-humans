import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "WARNING: Do not taunt the human. It will replay this exact conversation at 3 a.m. for the next eleven years, minimum.";

try {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", entry);
} catch {
  writeFileSync("entry.txt", entry);
}
