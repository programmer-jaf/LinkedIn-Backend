import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import config from "./../config/config.js";
import userRouter from "../router/user.router.js";
import healthCheckController from "../controller/healthCheck.controller.js";

// setup express application

const app = express();

// middleware
// cors configuration
app.use(
  cors({
    credentials: true,
    origin: config.cors_origin,
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

// express json configuration
app.use(
  express.json({
    limit: "50mb",
    extended: true,
  })
);

// express urlencoded configuration
app.use(cookieParser());

//
app.use(
  express.urlencoded({
    extended: true,
  })
);
// routes
app.use("/api/v1/auth", userRouter);
app.use("/api/v1", healthCheckController);

// error handlers

// export app
export default app;
