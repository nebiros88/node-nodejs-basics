import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
  const srcPath = path.join(__dirname, "/files/");
  const errorMessage = "FS operation failed";
  try {
    await fs.promises.access(srcPath);
    const files = await fs.promises.readdir(srcPath);
    for (const file of files) {
      console.log(file);
    }
  } catch (err) {
    throw new Error(errorMessage);
  }
};

await list();
