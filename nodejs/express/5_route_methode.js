var express = require('express');
var bodyParser = require('body-Parser');
var app = express();

//difinen middleware
app.use(express.urlencoded({'extended':true}));
app.use(bodyParser.json());
var list = [
    {'name':'ram','mobile':1234567890},
    {'name':'bharat','mobile':9087654321},
    {'name':'manas','mobile':5678094321},
];
//get contact
app.get("/contact",function(request,response){
  response.json(list);
});
app.post("/contact", function(request,response){
   var name = request.body.name;
   var mobile = request.body.mobile;

   //creat object
   var person = {'name':name,'mobile':mobile};
   //object insert into list
   list.push(person);

response.json([{'error':'no'},{'success':'yes'},{'message':'contact-inserted'}]);
});
app.put('/contact', function(request,response){
    response.send('i will update contacts');
});
app.delete('/contact', function(request,response){
    response.send('i will delet contacts');
});
app.listen(5000);
console.log('ready to accept request');

