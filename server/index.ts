import express from "express";
import config from "./utils/config";
import { db } from "./db/_index";
import { initDbDefaultValues, initDbConnections } from "./models/_index";
import cors from "cors";
import router from "./routers/_index";
import { WeekNumberService } from "./service/weekNumberService";
import ErrorHandlerMiddleware from "./middleware/ErrorHandlerMiddleware";

const { PORT, CLIENT_HOST, CLIENT_PORT, CLIENT_PROTOCOL } = config;

const app = express();

function appStartedCallback() {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
}

async function startDb() {
  await db.authenticate();
  initDbConnections();
  await db.sync({ alter: true });
  initDbDefaultValues();
}

async function onServerStarting() {
  const wn = new WeekNumberService();

  wn.scheduleParsing();
}

async function start() {
  try {
    await startDb();

    app.use(
      cors({
        credentials: true,
        origin: [
          `${CLIENT_PROTOCOL}://${CLIENT_HOST}:${CLIENT_PORT}`,
          `${CLIENT_PROTOCOL}://localhost`,
        ],
      })
    );
    app.use(express.json());
    app.use("/api", router);
    app.use(ErrorHandlerMiddleware);
    app.listen(PORT, appStartedCallback);

    await onServerStarting();
  } catch (err) {
    console.log("ERROR: ", err);
  }
}

start();
