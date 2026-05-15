let http = require('http');

const karan={name:"karan", gender:"male", wight:72, mobile :1234470984};
const lalji={name:"lalji", gender:"male", wight:62, mobile :1234567884};
const mayur={name:"mayur", gender:"male", wight:82, mobile :9876870984};

const krisha={name:"krisha", gender:"female", wight:70, mobile :1234345674};







let server = http.createServer(function(require,response){
    response.writeHead(200,{"content-type":"application/JASON"})
    let data;
    if(require.url ==='/karan'){
    data=JSON.stringify(karan);}

    else if(require.url==='/lalji'){
        data=JSON.stringify(lalji);
    }
    else if(require.url==='/mayur'){
        data=JSON.stringify(mayur);
    }
    else if(require.url==='/krisha'){
        data=JSON.stringify(krisha);
    }

});

const PORT=5000;

server.listen(PORT);
console.log("ready to accept requist");