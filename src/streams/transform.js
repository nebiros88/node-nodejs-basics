import { Transform } from "stream";

const transform = async () => {
  const { stdin, stdout } = process;

  const myTransform = new Transform({
    transform(chunk, encoding, callback) {
      this.push(chunk.toString().split("").reverse().join(""));
      callback();
    },
  });

  stdin.pipe(myTransform).pipe(stdout);
};

await transform();
