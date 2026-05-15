var http = require('http')

const karan = { name: "karan patel", gender: "male", weight: 72, mobile: "9876543210" };
const lalji = { name: "lalji bhai", gender: "male", weight: 80, mobile: "9876345678" };
const mayur = { name: "mayur shah", gender: "male", weight: 90, mobile: "6578902345" };
const krisha = { name: "krisha patel", gender: "female", weight: 47, mobile: "7654323210" };
var server = http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "application/json" });
    let data;
    if(request.url === '/karan'){
        data = JSON.stringify(karan);
    }
   else if(request.url === '/lalji'){
        data = JSON.stringify(lalji);
    }
   else if(request.url === '/mayur'){
        data = JSON.stringify(mayur);
    }
    else if(request.url === '/krisha'){
        data = JSON.stringify(krisha);
    }
    else{
        data =JSON.stringify({massage:'not found'});
    }

response.write(data);
response.end();
});


const PORT = 5000;
server.listen(PORT);
console.log('READ TO ACCEPT REQUIST');