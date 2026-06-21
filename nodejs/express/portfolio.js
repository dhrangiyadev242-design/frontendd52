const express = require('express');
const fs = require('fs');
const { request } = require('http');
const app = express();

function ReadHtmeFile(request,response,fileName){
    response.setHeader('content-type','text/html');
    fs.readFile(fileName,function(error,fileContant){
        if(error){
            response.status(500);
            response.write('<h1>file not file<>/h1');
        }
        else{
        response.send(fileContant);
        }
        return response.end();
    });
}
app.get("/",(request,response)=>ReadHtmeFile(request,response,"./3_home.html"));
app.get("/about",(request,response)=>ReadHtmeFile(request,response,"./3_about.html"));
app.get("/skills",(request,response)=>ReadHtmeFile(request,response,"./3_skills.html"));
app.get("/projects",(request,response)=>ReadHtmeFile(request,response,"./3_projects.html"));
app.get("/contact",(request,response)=>ReadHtmeFile(request,response,"./3_contact.html"));

app.listen(5000);
console.log('ready to accept request');