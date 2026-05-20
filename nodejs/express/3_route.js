var express = require('express');
var fs = require('fs');
const { request } = require('http');
var app = express();

function ReadHTMLFile(request, response, fileName) {
    response.setHeader("Content-type", "text/html");
    fs.readFile(fileName, function (error, fileContent) {
        response.send(fileContent);
    });
}
//creat route for home
app.get("/", (request, response) => ReadHTMLFile(request, response, '../home.html'));
app.get("/aboutus", (request, response) => ReadHTMLFile(request, response, '../aboutus.html'));

app.get("/contactus", (request, response) => ReadHTMLFile(request, response, '../contactus.html'));

app.get("/course", (request, response) => ReadHTMLFile(request, response, '../course.html'));


//404
//invalid route handle
app.use(function(request,response){
    response.status(404);
    response.send("<h1>- page not found</h1>");
});
app.listen(5000);
console.log('ready to accept request');












