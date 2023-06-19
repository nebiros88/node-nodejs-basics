import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const srcPath = path.join(__dirname, "/files/fileToRead.txt");
  const errorMessage = "FS operation failed";

  try {
    await fs.promises.access(srcPath);
    const contents = await fs.promises.readFile(srcPath, { encoding: "utf8" });
    console.log(contents);
  } catch (error) {
    throw new Error(errorMessage);
  }
};

await read();
