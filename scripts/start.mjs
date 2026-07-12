import { spawnSync } from "node:child_process";

const port = process.env.PORT ?? "3000";
const host = process.env.HOSTNAME ?? "0.0.0.0";

const result = spawnSync("next", ["start", "-p", port, "-H", host], {
  stdio: "inherit",
  shell: true
});

process.exit(result.status ?? 1);
