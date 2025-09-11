import express from "express";
import taskRoute from "./routes/tasksRouters.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();

//middleware

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));
const PORT = process.env.PORT || 5000;

app.use("/api/tasks", taskRoute);
connectDB().then(() => {
  app.listen(5000, () => {
    console.log(`server is listening on port ${PORT} `);
  });
});
