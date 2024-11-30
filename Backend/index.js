import express from "express";
import { configDotenv } from "dotenv";

configDotenv();



const app = express();



app.get("/",(req,res)=>{
    res.status(200).send({message:"welcome to Backend"})
})










const PORT = process.env.PORT 

app.listen(PORT,()=>{
    console.log("servers is sucessfully started")
})