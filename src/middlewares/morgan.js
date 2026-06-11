import chalk from "chalk";
import morgan from "morgan";

export const morganConfig = morgan((tokens, req, res) => {
  const ip = tokens["remote-addr"](req, res);
  const method = tokens.method(req, res);
  const url = tokens.url(req, res);
  const version = `HTTP/${req.httpVersion}`;
  const status = Number(tokens.status(req, res));
  const length = tokens.res(req, res, "content-length") || 0;
  const responseTime = tokens["response-time"](req, res);

  const statusColor =
    status >= 500
      ? chalk.red
      : status >= 400
        ? chalk.yellow
        : status >= 300
          ? chalk.cyan
          : chalk.green;

  return [
    chalk.gray(ip),
    chalk.dim("-"),
    chalk.magentaBright(method),
    chalk.cyan(url),
    chalk.dim(version),
    statusColor(status),
    chalk.magenta(length),
    chalk.dim("-"),
    chalk.yellow(`${responseTime} ms`),
  ].join(" ");
});
