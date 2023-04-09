import express from "express";
import dotenv from "dotenv";
import config from "./utils/config";
import { db } from "./db/_index";
import { initDb } from "./models/_index";
import cors from "cors";
import router from "./routers/_index";

dotenv.config();

const { PORT, CLIENT_HOST, CLIENT_PORT, CLIENT_PROTOCOL } = config;

const app = express();

function appErrorCallback() {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
}

async function startDb() {
  await db.authenticate();
  await db.sync();
  initDb();
}

async function start() {
  try {
    await startDb();
    app.use(
      cors({
        credentials: true,
        origin: `${CLIENT_PROTOCOL}://${CLIENT_HOST}:${CLIENT_PORT}`,
      })
    );
    app.use(express.json());
    app.use("/api", router);
    // app.use(ErrorHandlerMiddleware);
    app.listen(PORT, appErrorCallback);
  } catch (err) {
    console.log("ERROR: ", err);
  }
}

start();
