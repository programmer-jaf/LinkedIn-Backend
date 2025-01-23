import {Router} from "express";

const healthCheckRouter = Router();

healthCheckRouter.get("/healthcheck",healthCheckController);