import express from "express";
import { PORT, mongodburl } from "./config.js";
import mongoose from "mongoose";
import eventroutes from  "./routes/eventroutes.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use("/eventss",eventroutes);
app.get("/",(req,res)=>{
  console.log(req);
  return res.status(234).send("Hello from server");
})
app.use(cors({
  origin: "http://localhost:3000", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"], 
  credentials: true
}));

mongoose
  .connect(mongodburl)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log("Server is running at port: " + PORT);
    });
  })
  .catch((error) => {
    console.error("Error connecting in MongoDb"+error.message);
  });
