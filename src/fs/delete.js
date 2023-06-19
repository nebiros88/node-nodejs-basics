import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
  const srcPath = path.join(__dirname, "/files/");
  const fileToRemove = "fileToRemove.txt";
  const errorMessage = "FS operation failed";
  try {
    await fs.promises.access(path.join(srcPath, fileToRemove));
    await fs.promises.rm(path.join(srcPath, fileToRemove));
  } catch (err) {
    throw new Error(errorMessage);
  }
};

await remove();
