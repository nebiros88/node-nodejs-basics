import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
  const src = path.join(__dirname, "/files/fileToWrite.txt");
  const { stdin } = process;
  const writeStream = fs.createWriteStream(src, "utf-8");
  writeStream.on("error", (error) => console.log("Error", error.message));
  console.log("Enter data to write to file");
  stdin.on("data", (data) => {
    writeStream.write(data);
    console.log('Data recorded successfully, press "Ctrl + C" to exit');
  });
};

await write();
