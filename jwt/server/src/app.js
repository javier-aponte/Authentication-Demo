import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import { default as AuthRouter } from './routers/authRouter.js';
import { default as HomeRouter } from './routers/homeRouter.js';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: [
    "http://localhost",
    "http://localhost:5173",
  ],
  credentials: true
}))

app.use('/auth', AuthRouter);
app.use('/', HomeRouter);

export default app;
