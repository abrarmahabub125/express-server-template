import express from "express";
import { demoUsers } from "../controllers/users.controllers.js";

const router = express.Router();

router.use("/users", demoUsers);

export default router;
