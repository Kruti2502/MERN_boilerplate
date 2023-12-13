import express, { Request, Response } from "express";

import { homeController } from "../controllers/base.controller";

const router = express.Router();

router.get("/", homeController);

export default router;
