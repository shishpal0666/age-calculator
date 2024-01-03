import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app=express();
const port=3000;
const __dirname=dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
var result=false;

app.get("/",(req,res)=>{
    res.render("index.ejs");
});


app.post("/check",(req,res)=>{
    var td=new Date();
    var dd=new Date(req.body["dob"]);
    let result=true;
    var Age=td.getFullYear()-dd.getFullYear();
    // console.log(Age);
    
    res.render("index.ejs",{
    age:Age,
    r:result,
    });
});


app.listen(port,()=>{
    console.log(`Server running on port ${port}.`);
});