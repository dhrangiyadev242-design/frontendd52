
const http = require('http')
const url = require('url')


const countries =[
     { name: "india", continent: "asia", population: 1428000000, area: 328763 },
    { name: "india", continent: "asia", population: 1428000000, area: 328763 },
    { name: "india", continent: "asia", population: 1428000000, area: 328763 },
    { name: "india", continent: "asia", population: 1428000000, area: 328763 },
    { name: "india", continent: "asia", population: 1428000000, area: 328763 },
    { name: "india", continent: "asia", population: 1428000000, area: 328763 },
    { name: "india", continent: "asia", population: 1428000000, area: 328763 },
    { name: "india", continent: "asia", population: 1428000000, area: 328763 },
    { name: "india", continent: "asia", population: 1428000000, area: 328763 },
    { name: "india", continent: "asia", population: 1428000000, area: 328763 },
    { name: "india", continent: "asia", population: 1428000000, area: 328763 },
    { name: "india", continent: "asia", population: 1428000000, area: 328763 },
    { name: "india", continent: "asia", population: 1428000000, area: 328763 },
    { name: "india", continent: "asia", population: 1428000000, area: 328763 },
    { name: "india", continent: "asia", population: 1428000000, area: 328763 },
    { name: "india", continent: "asia", population: 1428000000, area: 328763 },
    { name: "india", continent: "asia", population: 1428000000, area: 328763 },
    { name: "india", continent: "asia", population: 1428000000, area: 328763 },
    { name: "india", continent: "asia", population: 1428000000, area: 328763 },
    { name: "india", continent: "asia", population: 1428000000, area: 328763 },
    { name: "india", continent: "asia", population: 1428000000, area: 328763 },
    { name: "india", continent: "asia", population: 1428000000, area: 328763 },
    { name: "india", continent: "asia", population: 1428000000, area: 328763 },
    { name: "india", continent: "asia", population: 1428000000, area: 328763 },
];
//creat server

var server = http.createServer((require,response)=>{
    var address = url.parse(require.url,true);
    console.log(require.href);
    response.writeHead(200 ,{'content-type':'application/JSON'});
    if(continent === asia){
        output = countries.filter((item)=>{
            return countries;
        })
    }
    response.write(JSON.stringify(output));
response.end();
});



//creat server
const potrno = 5000;
server.listen(5000);
console.log('ready to accept request');