import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import crypto from "crypto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
  const src = path.join(__dirname, "/files/fileToCalculateHashFor.txt");
  try {
    const readableStream = await fs.promises.readFile(src);
    const hash = crypto.createHash("sha256");
    hash.update(readableStream);
    const hex = hash.digest("hex");
    console.log(hex);
  } catch (err) {
    throw new Error(err);
  }
};

await calculateHash();
