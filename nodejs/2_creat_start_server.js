var http = require ('http');
let count = 0;
let server = http.createServer(function(request,response){
    count = count + 1;
    console.log('I have received request.',count);

      response.write('Request received');
      response.end();
});
  
const portno = 5000;

server.listen(portno);

console.log('read to accept request on',portno);