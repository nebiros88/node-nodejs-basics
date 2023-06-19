import { env } from "node:process";

const parseEnv = () => {
  const envVars = env;
  let result = "";
  for (const [key, value] of Object.entries(envVars)) {
    if (key.includes("RSS_")) result += `${key}=${value}${"; "}`;
  }
  console.log(result.trim().slice(0, -1));
};

parseEnv();
