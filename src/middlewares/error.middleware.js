import HttpStatus from "../constants/HttpStatus.js";
import ApiResponse from "../utils/ApiResponse.js";

/* ---------------- global error handling middleware function --------------- */
export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR;
  const message = err.message || "Internal Server Error";

  const responses = ApiResponse.fail(message, statusCode, err.errors);

  // Check environment to show error or not
  if (process.env.NODE_ENV === "development") {
    response.stack = err.stack;
  }
  return res.status(statusCode).json(response);
};
