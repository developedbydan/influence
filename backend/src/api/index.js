import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "../routes/authRoutes.js";
import influencerRoutes from "../routes/influencerRoutes.js";

dotenv.config({ path: `src/.env` });

const app = express();
const port = process.env.PORT;
const mongoDBURI = process.env.MONGO_URI;

const corsOptions = {
  origin: "https://influence-sable.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(express.json());

app.use(cors(corsOptions));

app.use(cookieParser());

app.use("/", authRoutes);
app.use("/influencers", influencerRoutes);

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
