import express from "express";
import { config } from "dotenv";
import connectDataBase from "./db.js";
import userRoutes from "./routes/users.route.js";
import helmet from "helmet";
import morgan from "morgan";

const app = express();
config();
const port = process.env.PORT || 3000;

connectDataBase();

//Middleware
app.use(express("json"));
app.use(helmet());
app.use(morgan("common"));

//route
app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
