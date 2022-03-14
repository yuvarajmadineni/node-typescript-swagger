import express, { Application } from "express";
import morgan from "morgan";
import userRouter from "./routes/userRoutes";
import tourRouter from "./routes/tourRoutes";
import path from "path";
import { initialize } from "express-openapi";
import { apiDoc } from "./api/api-doc";
import swaggerUi from "swagger-ui-express";
import { pool } from "./config/config";

const PORT = 8000;

const app: Application = express();

app.use(express.json());
initialize({
  app,
  // NOTE: If using yaml you can provide a path relative to process.cwd() e.g.
  // apiDoc: './api-v1/api-doc.yml',
  apiDoc,
  paths: path.resolve(__dirname, "api/path"),
  routesGlob: "**/*.{ts,js}",
  routesIndexFileRegExp: /(?:app)?\.[tj]s$/,
});

app.use(
  "/api-doc",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/api-docs",
    },
  })
);

app.use(morgan("tiny"));

app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});

app.use("/api/v1/users", userRouter);
app.use("/api/v1/tours", tourRouter);
