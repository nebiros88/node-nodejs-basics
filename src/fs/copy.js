import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  const srcDir = path.join(__dirname, "/files/");
  const copyDirName = path.join(__dirname, "/files_copy/");
  const errorMessage = "FS operation failed";
  try {
    await fs.promises.access(srcDir);
    await fs.promises.mkdir(copyDirName);
    const tasks = [];

    const files = await fs.promises.readdir(srcDir);
    for (const file of files) {
      const copiedFilePath = path.join(srcDir, file);
      const newFilePath = path.join(copyDirName, file);

      tasks.push(fs.promises.copyFile(copiedFilePath, newFilePath));
    }

    await Promise.all(tasks);
  } catch (err) {
    throw new Error(errorMessage);
  }
};

copy();
