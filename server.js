var express = require('express');
var app = express();
var path = require("path");

app.get("/",(req,res)=>{
    res.sendFile('index.html',{root:__dirname});
});

app.get("/aboutme",(req,res)=>{
    var info = {fname:"shyam",lname:"karhale",age:23,address:"Parbhani"}
    res.send(info);

})

app.listen(8000);