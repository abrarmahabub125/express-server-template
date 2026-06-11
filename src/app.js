import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import { errorHandler } from "./middlewares/error.middleware.js";
import { mongoSanitizer } from "./middlewares/mongoSanitize.js";
import { morganConfig } from "./middlewares/morgan.js";
import { globalLimiter } from "./middlewares/rateLimiter.js";
import routes from "./routes/index.js";
import ApiResponse from "./utils/ApiResponse.js";

export const app = express();

/* ------------------- Security and configuration packages ------------------ */
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(helmet());
app.use(morganConfig);
app.use(compression());
app.use(cookieParser());
app.use(mongoSanitizer);
app.use(express.json({ limit: "100kb" }));
app.use(express.urlencoded({ extended: true, limit: "100kb" }));

/* ----------------------------- Index route ----------------------------- */
app.get("/", globalLimiter, (req, res) => {
  res
    .status(200)
    .json(
      ApiResponse.success(
        `Server is running on port : ${process.env.PORT || 8080} | uptime : ${process.uptime().toFixed(2)}`,
        200,
      ),
    );
});

/* -------------------- Mount at root route directly. -------------------- */
app.use("/api/v1", routes);

/* ------------------------- Not found route handler ------------------------ */
app.use((req, res) => {
  res
    .status(404)
    .json(ApiResponse.fail(`Opps! Route ${req.originalUrl} not found.`, 404));
});

/* -------------------------- Global Error handler -------------------------- */
app.use(errorHandler);
