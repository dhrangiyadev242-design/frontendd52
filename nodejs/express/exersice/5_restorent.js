//  Create restaurant site which should have 5 pages & load the page from files using fs & url module. if user send request for not existing page display 404 page.  
//     1) home 
//     2) Menu 
//     3) Gallery 
//     4) Book hall 
//     5) contact us 

var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.static(__dirname));

function Restaurant(request, response, fileName){
    response.setHeader('content-type', 'text/html');

    fs.readFile(fileName, function (error, fileContent) {
        if (error) {
            response.status(404);
            response.write("<h1>file not found</h1>");
        }
        else 
        {
            response.write(fileContent);
        }
        response.end();
    });
}
//creat route
app.get("/", (request, response) => Restaurant(request, response, "./1_home.html"));
app.get("/menu", (request, response) => Restaurant(request, response, "./1_menu.html"));
app.get("/gallery", (request, response) => Restaurant(request, response, "./2_gallery.html"));
app.get("/bookhall", (request, response) => Restaurant(request, response, "./2_bookhall.html"));
app.get("/contact", (request, response) => Restaurant(request, response, "./2_contact.html"));
//404 error

app.use(function  (request,response){
    response.status(404);
    response.send("<h1>page not found</h1>");
});
app.listen(5000,()=>{
    console.log('ready to accept request');
});