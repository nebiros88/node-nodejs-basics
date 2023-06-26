import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import { Worker, workerData } from "worker_threads";
import os from "os";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cpus = os.cpus();
const workerSrc = path.join(__dirname, "/worker.js");
const initN = 10;

const runWorkers = () => {
  const tasks = cpus.map((cpu, index) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(workerSrc, { workerData: initN + index });
      worker.on("message", (value) => {
        resolve({ status: "resolved", data: value });
      });
      worker.on("exit", (code) => {
        if (code !== 0) {
          resolve({ status: "error", data: null });
        }
      });
    });
  });
  return Promise.all(tasks);
};

const performCalculations = async () => {
  const result = await runWorkers();
  console.log(result);
};

await performCalculations();
