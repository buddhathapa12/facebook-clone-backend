import express from "express";
import { config } from "dotenv";
import connectDataBase from "./db.js";

const app = express();
config();
const port = process.env.PORT || 3000;

connectDataBase();

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
