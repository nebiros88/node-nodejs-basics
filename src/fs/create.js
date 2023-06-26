import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  const fileName = "fresh.txt";
  const fileContent = "I am fresh and young";
  const errorMessage = "FS operation failed";
  const fileDir = path.join(__dirname, "/files/");
  try {
    const doesFileExist = fs.existsSync(fileDir + fileName);
    if (!doesFileExist) {
      await fs.promises.writeFile(fileDir + fileName, fileContent);
    } else {
      throw new Error(errorMessage);
    }
  } catch (error) {
    console.log(error);
  }
};

await create();
