import express from 'express';
import dotenv from 'dotenv';
import config from './utils/config';

dotenv.config();

const { PORT } = config

const app = express();

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});