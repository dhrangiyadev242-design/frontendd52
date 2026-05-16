
let http = require('http');

const countries=[
{"name":"USA","continent":"North America","population":331000000,"area":9833517},
{"name":"China","continent":"Asia","population":1441000000,"area":9596961},
{"name":"India","continent":"Asia","population":1393000000,"area":3287263},
{"name":"Russia","continent":"Europe/Asia","population":146000000,"area":17098242},
{"name":"Brazil","continent":"South America","population":214000000,"area":8515767},
{"name":"Canada","continent":"North America","population":38000000,"area":9984670},
{"name":"Australia","continent":"Oceania","population":26000000,"area":7692024},
{"name":"UK","continent":"Europe","population":67000000,"area":242495},
{"name":"France","continent":"Europe","population":68000000,"area":551695},
{"name":"Germany","continent":"Europe","population":83000000,"area":357386},
{"name":"Italy","continent":"Europe","population":59000000,"area":301340},
{"name":"Spain","continent":"Europe","population":47000000,"area":505990},
{"name":"Mexico","continent":"North America","population":128000000,"area":1964375},
{"name":"Japan","continent":"Asia","population":125000000,"area":377975},
{"name":"South Korea","continent":"Asia","population":52000000,"area":100210},
{"name":"Indonesia","continent":"Asia","population":273000000,"area":1904569},
{"name":"Pakistan","continent":"Asia","population":225000000,"area":881913},
{"name":"Bangladesh","continent":"Asia","population":166000000,"area":147570},
{"name":"Nigeria","continent":"Africa","population":223000000,"area":923768},
{"name":"Egypt","continent":"Africa","population":110000000,"area":1002450},
{"name":"Turkey","continent":"Asia/Europe","population":85000000,"area":783356},
{"name":"Iran","continent":"Asia","population":86000000,"area":1648195},
{"name":"Saudi Arabia","continent":"Asia","population":36000000,"area":2149690},
{"name":"South Africa","continent":"Africa","population":60000000,"area":1221037},
{"name":"Argentina","continent":"South America","population":46000000,"area":2780400},
{"name":"Colombia","continent":"South America","population":52000000,"area":1141748},
{"name":"Peru","continent":"South America","population":34000000,"area":1285216},
{"name":"Chile","continent":"South America","population":19000000,"area":756102},
{"name":"Vietnam","continent":"Asia","population":98000000,"area":331212},
{"name":"Thailand","continent":"Asia","population":70000000,"area":513120},
{"name":"Philippines","continent":"Asia","population":114000000,"area":300000},
{"name":"Malaysia","continent":"Asia","population":33000000,"area":330803},
{"name":"Singapore","continent":"Asia","population":5900000,"area":728},
{"name":"New Zealand","continent":"Oceania","population":5100000,"area":268838},
{"name":"Ukraine","continent":"Europe","population":38000000,"area":603628},
{"name":"Poland","continent":"Europe","population":38000000,"area":312696},
{"name":"Netherlands","continent":"Europe","population":17500000,"area":41543},
{"name":"Belgium","continent":"Europe","population":11500000,"area":30528},
{"name":"Sweden","continent":"Europe","population":10400000,"area":450295},
{"name":"Norway","continent":"Europe","population":5400000,"area":385207},
{"name":"Finland","continent":"Europe","population":5500000,"area":338424},
{"name":"Denmark","continent":"Europe","population":5900000,"area":43094},
{"name":"Switzerland","continent":"Europe","population":8700000,"area":41285},
{"name":"Austria","continent":"Europe","population":9100000,"area":83871},
{"name":"Greece","continent":"Europe","population":10400000,"area":131957},
{"name":"Portugal","continent":"Europe","population":10200000,"area":92212},
{"name":"Iraq","continent":"Asia","population":43000000,"area":438317},
{"name":"Afghanistan","continent":"Asia","population":41000000,"area":652230},
{"name":"Ethiopia","continent":"Africa","population":126000000,"area":1104300},
{"name":"Morocco","continent":"Africa","population":37000000,"area":446550}
];

function displayCountry(request,response){
    response.writeHead(200,{"content-type":"application/JSON"});
    response.write(JSON.stringify(countries));
    response.end();
}
let server = http.createServer((require,response)=> displayCountry(require,response))


const PORT = 5000;
server.listen(PORT);
console.log('ready to accept request')