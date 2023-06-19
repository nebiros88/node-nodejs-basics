import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const src = path.join(__dirname, "/files/fileToRead.txt");
  let data = "";
  const readableStream = fs.createReadStream(src, "utf-8");
  readableStream.on("data", (chunk) => (data += chunk));
  readableStream.on("end", () => console.log(data));
  readableStream.on("error", (error) => console.log("Error", error.message));
};

await read();
