var express = require('express');
var fs = require('fs');
var app = express();

//creat rout for home
app.get("/",function(request,response){
    response.setHeader("Content-type","text/html");

    fs.readFile('../home.html',function(error,fileContent){
        response.send(fileContent);
    });
});

//creat rout for about us
app.get("/aboutus",function(request,response){
    response.setHeader("Content-type","text/html");

    fs.readFile('../aboutus.html',function(error,fileContent){
        response.send(fileContent);
    });
});

//creat rout for contact us
app.get("/contactus",function(request,response){
    response.setHeader("Content-type","text/html");

    fs.readFile('../contactus.html',function(error,fileContent){
        response.send(fileContent);
    });
});

//creat rout for coures
app.get("/course", function(request, response){
    response.setHeader("Content-type","text/html");
    fs.readFile('../course.html',function(error,fileContent){
        response.send(fileContent);
    });
});
app.listen(5000);
console.log('ready to accept request');
