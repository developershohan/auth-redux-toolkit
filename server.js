import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import mongoDBConnect from "./config/mongoDB.js";
import userRouter from "./route/user.js";
import authRouter from "./route/auth.js";
import errorHandler from "./middlewares/errorhandler.js";
import cookieParser from "cookie-parser";

// initialization
const app = express();
dotenv.config();

// environment vars
const PORT = process.env.PORT || 9090;

// set middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// static folder
app.use(express.static("public"));
app.use(cookieParser())

// routing
app.use("/api/v1/user", userRouter);
app.use("/api/v1/auth", authRouter);

// error handler
app.use(errorHandler);

// app listen
app.listen(PORT, () => {
  mongoDBConnect();
  console.log(`server is running on port ${PORT}`.bgGreen.black);
});
