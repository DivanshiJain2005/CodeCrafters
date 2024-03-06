const express=require("express");
const app=express();
const path=require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"public")));
app.use('public/images/',express.static('./public/images'));
app.get("/services",(req,res)=>{
    res.render("services.ejs");
});
app.get("/references",(req,res)=>{
    res.render("references.ejs");
});
app.get("/contactUs",(req,res)=>{
    res.render("contactUs.ejs");
});
app.get("/translate",(req,res)=>{
    res.render("translate.ejs");
});
app.get("/pdf-upload",(req,res)=>{
    res.render("pdfupload.ejs");
});
app.get("/text_to_pdf",(req,res)=>{
    res.render("text_to_pdf.ejs");
});
app.get("/",(req,res)=>{
    console.log("on root directory");
    res.render("index.ejs");
});
app.get("/home",(req,res)=>{
    console.log("on root directory");
    res.render("index.ejs");
});
app.listen("8080",()=>{
    console.log("server is listening to port 8080");
});