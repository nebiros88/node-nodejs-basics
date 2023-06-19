import { argv } from "node:process";

const parseArgs = () => {
  const cliArgs = argv.slice(2);
  let result = "";
  for (let i = 0; i < cliArgs.length; i += 2) {
    result += `${cliArgs[i].slice(2)} is ${cliArgs[i + 1]}${i + 1 < cliArgs.length - 1 ? ", " : ""}`;
  }
  console.log(result);
};

parseArgs();
