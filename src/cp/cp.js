import { fileURLToPath } from "url";
import path from "path";
import { ChildProcess, fork } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
  const src = path.join(__dirname, "/files/script.js");
  const child = fork(src, args, {
    stdio: [0, 1, 2, "ipc"],
  }).on("close", (code) => {
    process.stdout.write(`Exited with code: ${code}`);
  });
};

spawnChildProcess([1, 2, 3, 5]);
