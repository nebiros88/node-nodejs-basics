import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import zlib from "zlib";
import { pipeline } from "stream";
import { promisify } from "util";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pipe = promisify(pipeline);

const decompress = async () => {
  const src = path.join(__dirname, "/files/archive.gz");
  const dest = path.join(__dirname, "/files/fileToCompress.txt");
  const unzip = zlib.createUnzip();
  const readStream = fs.createReadStream(src);
  const writeStream = fs.createWriteStream(dest);
  try {
    await pipe(readStream, unzip, writeStream);
  } catch (err) {
    throw new Error(err);
  }
};

await decompress();
