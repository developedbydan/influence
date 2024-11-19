import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import userRoutes from "./routes/userRoutes.js";
import influencerRoutes from "./routes/influencerRoutes.js";

dotenv.config({ path: `src/.env` });

const app = express();
const port = process.env.PORT;
const mongoDBURI = process.env.MONGO_URI;
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));

app.use("/", userRoutes);
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
