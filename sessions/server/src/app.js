import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';
import session from 'express-session';
import connectPgSimple from 'connect-pg-simple';
import pg from 'pg'
import { fileURLToPath } from 'url';

const app = express();
const PgSession = connectPgSimple(session);

const pgPool = new pg.Pool({
  connectionString: process.env.DATABASE_URL
});

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

app.use(session({
  store: new PgSession({
    pool: pgPool,
    tableName: 'Session',
    createTableIfMissing: true
  }),
  secret: process.env.SESSIONS_KEY,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true }
}));


export default app;