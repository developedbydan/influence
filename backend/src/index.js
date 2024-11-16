import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes.js";

dotenv.config({ path: `src/.env` });

const app = express();
const port = process.env.PORT;
const mongoDBURI = process.env.MONGO_URI;

app.use(express.json());

app.use("/", userRoutes);

mongoose
  .connect(mongoDBURI)
  .then(() => {
    console.log("App connected to database");
    app.listen(port, () => {
      console.log(`App is listening to port: ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
