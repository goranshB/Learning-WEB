import axios from "axios";
import express from "express";

const API_URL="https://secrets-api.appbrewery.com";

const port =3000;

const app=express();
app.use(express.static("public"));

app.get("/",async (req,res)=>{
    try{
        const b= await axios.get(API_URL+"/random");
        res.render("index.ejs",{
            secret: JSON.stringify(b.data.secret),
            user: JSON.stringify(b.data.username),
        });
    }catch(error){
        res.status(404).send(error.message);
    }
});



app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});