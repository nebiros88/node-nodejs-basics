import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
  const fileToRename = "wrongFilename.txt";
  const newFileName = "properFilename.md";
  const errorMessage = "FS oparation failed";
  const srcPath = path.join(__dirname, "/files/");

  try {
    await fs.promises.access(path.join(srcPath, fileToRename));
    await fs.promises.rename(path.join(srcPath, fileToRename), path.join(srcPath, newFileName));
  } catch (err) {
    throw new Error(errorMessage);
  }
};

await rename();
