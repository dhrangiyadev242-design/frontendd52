var express = require('express');
var app = express();
//get routes with inputs 
app.get("/add/:num1/:num2",function(request,response){
    let num1 = request.params.num1;
    let num2 = request.params.num2;

    let addition = parseInt(num1) + parseInt(num2);
    response.send("addition"+ addition);
 });
 app.get("/sub/:num1/:num2", function(request,response){
    let num1 = request.params.num1;
    let num2 = request.params.num2;

    let subtraction = parseInt(num1) - parseInt(num2);
    response.send("subtrsction"+subtraction);

 });
 app.get("/mul/:num1/:num2",function(request,response){
   let num1 = request.params.num1;
   let num2 = request.params.num2;

   let multiplication = parseInt(num1) * parseInt(num2);
   response.send("multiplication"+ multiplication);
 });
 app.get("/div/:num1/:num2", function(request,response){
    let num1 = request.params.num1;
    let num2 = request.params.num2;



    let division = parseInt(num1) / parseInt(num2);
    response.send("division" + division);

 })

 app.use(function(request,response){
    response.send("bad request. no such route exists...");
});
 app.listen(5000,()=>{
    console.log('ready to accept request');
 });