import { rateLimit } from "express-rate-limit";

/* ------------------------- Global Request limiter ------------------------- */
export const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // 100 requests per IP
  standardHeaders: true,
  legacyHeaders: false,
  message: (req, res) => {
    res.json("Too many request from thin IP");
  },
});

/* ---------- Request limiter for Authentication and Authorization ---------- */
export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 15, // 15 minutes
  standardHeaders: true,
  legacyHeaders: false,
  message: (req, res) => {
    res.json("Too many request from thin IP");
  },
});
