var express = require('express');
var app = express();

//creat route of home
app.get("/",function(request,response){
    response.send("<html><body><h1>Home</h1><hr/><p>this is home page</p></body></html>");
});

//creat route for aboutus
app.get("/aboutus",function(request,response){ 
   response.send("<html><body><h1>About us</h1><hr/><p>this is aboutus page</p></body></html>");
});
//creat route for contactus
app.get("/contactus",function(request,response){
    response.send("<html><body><h1>Contact us</h1><hr/><p>this is contactus </p></body></html>");

});
//creat route for coures
app.get("/coures",function(request,response){
    response.send("<html><body><h1>Coures </h1><hr/><p>this is coures page </p></body></html>");

});
//creat route for non existing page
// app.all("*",function(request,response){
   // response.send("<html><body><h1>page not found </h1><hr/><p>no such page exists</p></body></html>");
//});
app.listen(5000);
console.log('ready to accept request.');
