import express, { urlencoded } from "express";
import studentRouter from "./route.js";
import cors from "cors"

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());


app.use("/api/v1/student" , studentRouter);

export {app};