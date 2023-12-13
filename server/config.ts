import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`),
});

const config = {
  NODE_ENV: process.env.NODE_ENV || "development",
  HOST: process.env.HOST || "localhost",
  PORT: +process.env.PORT! || 3001,
  MONGO_URL: process.env.MONGO_URL,
};

export default config;
