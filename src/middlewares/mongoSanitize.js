import mongoSanitize from "express-mongo-sanitize";

/* -------------------------- prevent XSS Injection ------------------------- */
export const mongoSanitizer = (req, _res, next) => {
  if (req.body && typeof req.body === "object") {
    mongoSanitize.sanitize(req.body);
  }

  if (req.params && typeof req.params === "object") {
    mongoSanitize.sanitize(req.params);
  }

  if (req.query && typeof req.query === "object") {
    mongoSanitize.sanitize(req.query);
  }

  next();
};
