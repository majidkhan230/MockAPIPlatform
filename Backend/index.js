import express from "express";
import { configDotenv } from "dotenv";

configDotenv();



const app = express();



app.get("/",(req,res)=>{
    res.status(200).send({message:"welcome to Backend"})
})

app.get("/posts",(req,res)=>{
    res.status(200).send({message:"welcome to Products"})
})

app.get("/posts/:id",(req,res)=>{
    const id = req.params.id
    res.status(200).send({message:`product ${id}`})
})







const PORT = process.env.PORT 

app.listen(PORT,()=>{
    console.log("servers is sucessfully started")
})