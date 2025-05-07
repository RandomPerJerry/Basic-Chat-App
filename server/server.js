import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('listening to port', process.env.PORT);
    })
  })
  .catch((error) => {
    console.log(error);
  })
