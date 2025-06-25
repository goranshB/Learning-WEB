import express from "express";

const app=express();
var port=5000;


app.get("/",(req,res)=>{
    const date = new Date(); 
    // const day = date.getDay();
    const day=0;
    let type="a weekday";
    let ad=" work hard";

    if(day===0||day===6){
        type="a weenkend";
        ad=" go enjoy your day";
    }

    res.render("index.ejs",{dayType:type,advice:ad});
});

app.listen(port,()=>{
    console.log("server is running!");
});





