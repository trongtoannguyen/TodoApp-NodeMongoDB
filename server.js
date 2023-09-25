import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.MONGO_URI;
const app = express();
const port = process.env.PORT || 3000;

app.get("/index.html", (req, res) => res.send("/public/index.html"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
