import express from "express";
const app=express();

app.get("/",(req,res)=>{
    res.send("hello world how are you what are you doing");
});

app.listen(3000,()=>{
    console.log("server is runnign");
});