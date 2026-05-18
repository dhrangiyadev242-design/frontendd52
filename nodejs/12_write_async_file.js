const http = require('http')
const fs = require('fs')

let server = http.createServer(function(request,response){
    let name = "lalji dhrangiya";
    let mobile = "1234567890";
    let email = "laljidhrangi@gmail.com";
    let message = 'I want to join your coures';
    let filename = "student.txt";
   let  fileContent = `name ${name}\nmobile ${mobile}\nemail ${email}\nmessage ${message}\n`;
   response.writeHead(200,{'content-type':'text/html'});
   fs.writeFile(filename,fileContent, function(error){
    if(error){
        response.write('oops something went wrong');
    }
    else{
        response.write('thankyou to join us we contact shortley ');
        return response.end();
    }
   });
   console.log('I have succesfulley ready file');
});
server.listen(5000);
console.log('ready to accept file');