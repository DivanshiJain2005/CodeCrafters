const express = require('express');
const app = express();

const path = require("path");

const translate = require("translation-google");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));
app.use(express.static(path.join(__dirname,"/public/assests")));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const port = 8080;

app.get("/",(req,res)=>{
    res.render("home2.ejs");
})

app.get("/pdfUpload",(req,res)=>{
    res.render("pdfUpload.ejs");
})

app.get("/textToPdf",(req,res)=>{
    res.render("textToPdf.ejs");
})

app.post("/textToPdf",(req,res)=>{
    let {text ,opt} = req.body;

    let output = "";
    translate(text, {from: "en", to: opt}).then(r => {
        res.render("downloadPdf.ejs",{output : r.text});
    }).catch(err => {
        console.error(err);
        output = "Error";
    });
    
})


app.get("/trans",(req,res)=>{
    let text = "Hello world"
    translate(text, {from: "en", to: "hi"}).then(r => {
        res.send(r.text);
    }).catch(err => {
        console.error(err);
        res.send("Error");
    });
})

app.listen(port,()=>{
    console.log("listening");
})