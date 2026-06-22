let express = require('express');
let fs = require('fs');
const { request } = require('http');
let app = express();
app.use(express.static(__dirname)); 

function SmartShope(request,response,fileName){
        response.setHeader('content-type','text/html');
     fs.readFile(fileName,function(error,fileContant){
        if(error){
            response.status(404);
             response.write('<h1>file not found</h1>');
        }
        response.send(fileContant);
     });
    
}
  app.get("/",(request,response)=>SmartShope(request,response,"./home_1.html"));
  app.get("/products",(request,response)=>SmartShope(request,response,"./products_1.html"));
  app.get("/cart",(request,response)=>SmartShope(request,response,"./cart_1.html"));
  app.get("/about",(request,response)=>SmartShope(request,response,"./about_1.html"));
  app.get("/contact",(request,response)=>SmartShope(request,response,"./contact_1.html"));

  app.listen(5000);
  console.log('ready to accept request');