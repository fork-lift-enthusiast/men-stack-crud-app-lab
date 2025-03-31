import express from "express";
import mongoose from "mongoose";
import router from "./routes/index.js";
import dotenv from "dotenv";
import methodOverride from "method-override"
import morgan from "morgan";
dotenv.config();

const app = express();
const PORT = process.env.PORT ? process.env.PORT : "3000";
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(morgan("dev"))
app.use("/", router);
mongoose.connect(process.env.MONGO_URI);
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});
app.listen(PORT, () => {
  console.clear();
  console.log(`listening on port ${PORT}`);
});
