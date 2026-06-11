import express from "express";
import { demoUsers } from "../controllers/user.controller.js";

const router = express.Router();

router.use("/users", demoUsers);

export default router;
