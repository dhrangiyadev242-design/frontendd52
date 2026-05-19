const http = require('http')
const fs = require('fs')
const { url } = require('inspector')

let server = http.createServer(function (request,response){
    let address = url.parse(url.request,true);
    let page = address.pathname;
    console.log(page);

    let filename = '404.html';
    if(page === '/'){
        filename = 'home.html';

    }
    else if
        (page === '/aboutus'){
            filename = 'aboutus.html';
        }
        
        
    
})
