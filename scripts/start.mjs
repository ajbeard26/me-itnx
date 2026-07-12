import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const nextBin = path.join(root, "node_modules", "next", "dist", "bin", "next");
const port = process.env.PORT ?? "3000";
const host = process.env.HOSTNAME ?? "0.0.0.0";

console.log(`Starting Next.js on ${host}:${port}`);

const result = spawnSync(process.execPath, [nextBin, "start", "-p", port, "-H", host], {
  cwd: root,
  stdio: "inherit",
  env: process.env
});

process.exit(result.status ?? 1);
