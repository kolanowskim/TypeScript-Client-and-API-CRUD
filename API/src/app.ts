import cors from "cors";
import express, { Request, Response } from "express";
import * as MySQLConnector from "./services/mysqlConnector";
import starRouter from "./routes/starRoutes";
import constellationRouter from "./routes/constellationRoutes";
import starConRouter from "./routes/star-conRoutes";

const app = express();
const port = 777;

// create database pool
MySQLConnector.init();

// enable all CORS request
app.use(cors());

// parse incoming request body and append data to `req.body`
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/stars", starRouter);
app.use("/constellations", constellationRouter);
app.use("/starConstellations", starConRouter);

app.listen(port, () => {
  console.log(`JavaScript app listening at http://localhost:${port}`);
});
