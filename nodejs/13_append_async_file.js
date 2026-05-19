const http = require('http')
const fs = require('fs')


var server = http.createServer(function (request,response){
    var name ="ram patel";
    var mobile = "1234567899";
    var email = "ram123@gmail.com";
    var message = 'I wont to join your coures';
    var filename = 'student.txt';
    var fileContent = `name${name}\nmobile ${mobile}\nemail ${email}\nmessage ${message}\n`;
    response.writeHead(200,{'content-type':'text/html'});
    fs.appendFile(filename,fileContent , function(error){
        if(error){
            response.write('oops something went wrong');
        }
        else{
            response.write('thank you for jion we content you shortly');
            return response.end();
        }
    });
    console.log('i have successfully read file');
})
server.listen(5000);
console.log('ready to accept request');