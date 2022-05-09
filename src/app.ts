import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";

import routes from "./routes";
import AppError from "./errors/AppError";
import { pagination } from "typeorm-pagination";

const app = express();

app.use(express.json());

app.use(pagination);
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  console.log(err);

  return response.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
});

app.listen(3333, () => {
  console.log("Server started on port 3333");
});

export default app;
