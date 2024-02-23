import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import ConnectDB from "./Config/ConnectDB.js";
ConnectDB();

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 2030;

import Routes from "./Routes/Routes.js";
app.use("/CrudApp/Practice",Routes);

app.listen(PORT, ()=>console.log(`Server Start On ${PORT} Port No.!`));