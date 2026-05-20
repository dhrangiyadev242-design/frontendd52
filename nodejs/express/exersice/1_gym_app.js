const express = require('express');
const fs = require('fs');
const app = express();
function ReadHTMLFile(request,response,fileName){
    response.setHeader('content-type','text/html');

    fs.readFile(fileName, function(error,fileContent){
            if(error){
            response.writeHead(404);
            response.write("<h1>File Not Found</h1>");
        }
        else{
            response.write(fileContent);
        }

        response.end();
    });
      
     

}
//creat route for home
app.get("/",(request,response)=> ReadHTMLFile(request,response, './home.html'));
app.get("/about",(request,response)=> ReadHTMLFile(request,response, './about.html'));
app.get("/contact",(request,response)=> ReadHTMLFile(request,response, './contact.html'));
app.get("/services",(request,response)=> ReadHTMLFile(request,response, './services.html'));
app.get("/trainers",(request,response)=> ReadHTMLFile(request,response, './trainers.html'));

//404 error

app.use(function  (request,response){
    response.status(404);
    response.send("<h1>page not found</h1>");

});
app.listen(5000);
console.log('ready to accept request');