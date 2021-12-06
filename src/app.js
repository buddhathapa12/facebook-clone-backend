import express from "express";
import { config } from "dotenv";

const app = express();
config();
const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`App listening at http://localhost:${port}`);
});