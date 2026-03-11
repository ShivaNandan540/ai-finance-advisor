const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const {spawn} = require("child_process");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/predict",(req,res)=>{

const amount=req.body.amount;

const python = spawn("python",["../ml-model/model.py",amount]);

python.stdout.on("data",(data)=>{

res.json({prediction:data.toString()});

});

});

app.listen(5000,()=>{

console.log("Server running on port 5000");

});