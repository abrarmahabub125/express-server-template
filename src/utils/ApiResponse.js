import HttpStatus from "../constants/HttpStatus.js";

/* -------------------------- Send Success Response ------------------------- */
function success(message, statusCode, data = null, meta = undefined) {
  const payload = {
    success: true,
    statusCode,
    message,
  };

  if (data) payload.data = data;
  if (meta) payload.meta = meta;

  return payload;
}

/* --------------------------- Send Fail Response --------------------------- */
function fail(
  message = "Internal Server Error",
  statusCode = HttpStatus.INTERNAL_SERVER_ERROR,
  errors = null,
) {
  const payload = {
    success: false,
    statusCode,
    message,
  };

  if (errors) {
    payload.errors = errors;
  }

  return payload;
}

export default { success, fail };
