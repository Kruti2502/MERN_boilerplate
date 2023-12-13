import config from "../config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import baseRoutes from "../routes/base.routes";
import userRoutes from "../routes/user.routes";
import { errorHandler } from "../middlewares/errorHandler";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json()); // Parse json data

app.use("/", baseRoutes);
app.use("/user", userRoutes);

app.use(errorHandler);

mongoose.connect(config.MONGO_URL!).then(() => {
  app.listen(config.PORT, config.HOST, () => {
    console.log(`APP LISTENING ON http://${config.HOST}:${config.PORT}`);
  });
});
