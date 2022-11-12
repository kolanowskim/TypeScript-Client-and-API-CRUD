import cors from 'cors';
import express, { Request, Response } from 'express';
import * as MySQLConnector from './utils/mysql.connector';
import router from './routes/routes'


const app = express();
const port = 777;

// create database pool
MySQLConnector.init();

// enable all CORS request
app.use(cors());

// parse incoming request body and append data to `req.body`
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });