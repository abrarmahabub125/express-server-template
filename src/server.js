import "dotenv/config";
import { app } from "./app.js";
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT || 8080;

/* ---------------------- Connect DB then start server ---------------------- */
connectDB()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Database connected | Server is running on port: ${PORT}`),
    );
  })
  .catch((err) => {
    console.log(err);
  });
