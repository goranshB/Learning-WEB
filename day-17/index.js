import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    res.render("index.ejs", {data:result});
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.post("/", async (req, res) => {
  console.log(req.body);
  try{
    const type=req.body.type;
    const numb=req.body.participants;

    const response=await axios.get(`https://bored-api.appbrewery.com/filter?type=${type}&participants=${numb}`);
    const result=response.data;
    res.render("index.ejs",{data:result[Math.floor(Math.random() * result.length)]});

  }
  catch(error){
    console.error("Failed to make request",error.message);
    res.render("index.ejs",{error:"NO activity found"});
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
