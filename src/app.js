import express from "express";
import { config } from "dotenv";
import connectDataBase from "./db.js";
import userRoutes from "./routes/users.route.js";
import authRoutes from "./routes/auth.route.js";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";

const app = express();
config();
const port = process.env.PORT || 3000;

connectDataBase();

//Middleware
app.use(express("json"));
app.use(helmet());
app.use(morgan("common"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//route
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
