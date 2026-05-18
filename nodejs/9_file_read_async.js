var http = require('http');
var fs = require('fs');


var server = http.createServer(function (require,response){

    fs.readFile('myfile.html',function(error, fileContent){
        response.writeHead(200,{'content-type':'text/html'});
        response.write(fileContent);
        return response.end();

    });
});
server.listen(5000);
console.log('ready to accept request');