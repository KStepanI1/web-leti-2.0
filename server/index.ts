import express from "express";
import dotenv from "dotenv";
import config from "./utils/config";
import { db } from "./db/_index";
import defineModels from "./models/_index";
import cors from "cors";

dotenv.config();

const { PORT } = config;

const app = express();

function cofigurateApp() {
  app.use(cors());
  app.use(express.json());
}

function appErrorCallback() {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
}

async function startDb() {
  await db.authenticate();
  await db.sync();
  defineModels;
}

async function start() {
  try {
    await startDb();
    cofigurateApp();
    app.listen(PORT, appErrorCallback);
  } catch (err) {
    console.log("ERROR: ", err);
  }
}

start();
