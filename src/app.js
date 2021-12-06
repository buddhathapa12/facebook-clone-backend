import express from "express";
import { config } from "dotenv";
import connectDataBase from "./db.js";
import userRoutes from "./routes/user.route.js";

const app = express();
config();
const port = process.env.PORT || 3000;

connectDataBase();

//route
userRoutes(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
