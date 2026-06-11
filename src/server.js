import chalk from "chalk";
import "dotenv/config";
import { app } from "./app.js";
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT || 8080;

/* ---------------------- Connect DB then start server ---------------------- */
connectDB()
  .then(() => {
    app.listen(PORT, () =>
      console.log(
        `${chalk.dim(new Date().toUTCString())} ` +
          `${chalk.green(" INFO ")} ` +
          `${chalk.white("Listening on PORT:")} ` +
          `${chalk.cyan(`${PORT}`)} ` +
          `${chalk.dim(`(${process.env.NODE_ENV})`)} ` +
          `${chalk.gray("•")} ` +
          `${chalk.green("Database connected")}`,
      ),
    );
  })
  .catch((err) => {
    console.log(err);
  });
