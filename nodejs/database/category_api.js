let express = require('express');
let connection = require('./connection');

let bodyParser = require('body-parser');
var app = express();
//difine moddlewear
app.use(express.urlencoded({'extended':true}));
app.use(bodyParser.json());

const CATEGORY = "/category";
app.get(`${CATEGORY}{/:start}{/:field}`, function (request, response) {
    // select 25 rows from category table in descending order of id
    let start;
    if (request.params.start !== undefined)
        start = parseInt(request.params.start);
    else
        start = 0;

    let field;
    if (request.params.field !== undefined) {
        field = request.params.field
    }
    else {
        field = 'id';
    }
    var sql = `select * from category order by ${field} desc limit ?,25`;
    var data = [start]
    console.log(start,field);
    connection.con.query(sql, data, function (error, result, fields) {
        if (error != null) {
            console.log(error);
            response.json([{ 'error': 'oops something went wrong, please try after sometimes' }])
        }
        else {
            res = []; //empty list 
            res.push({ 'error': 'no' }); //0th position
            res.push({ 'total': result.length }) //1st position
            res.push(result) //last result
            response.json(res);
        }

    });
});

app.post(category,(request,response)=>{
 let name = request.body.name;
 let detail = request.body.detail;
 //check name details are not empty

 
 
  if(name === undefined || detail === undefined){
   return response.send([{'error':'input messing'}]);
 }
 //parameters querise (also nkow as parameters statement)
 const sql = `insert into category (name,detail,photo)values(?,?,?)`;
 const data = [name,detail,'photo.jpg'];

 //run sql stemente 

 connection.con.query(sql,data,(error,result)=>{
    //this function will run after sql stetement excutes if sql statement fails then error variable will be not null
    //if sql stetement success then result variables be not null
    if(error !=null){
        
        response.status(500).json([{'error':'interner server is missing'}]);
    } 
    else{
        console.log([{'error':'no', 'successs':'yes', 'message':'category inserted'}]);
    }
 });

});
app.put("/category",(request,response)=>{
 response.send('update request resivied');
});
app.delete(category,(request,response)=>{
    const categoryid = request.body.categoryid;
    if(categoryid === undefined){
        response.json([{'error':'input missing'}]);

    }
    //? is called parametres ,plaseholder
    const sql = "delete from category where id=?";
    const data = [categoryid];
    connection.con.query(sql,data,(error,result)=>{
        if(error !=null){
            console.log(error);
            response.status(500).json([{'error':'internal server error'}]);
        }
        else{
            response.json([{'error':'no','success':'yes','message':'category deleted'}]);
        }
    })

  
});
app.listen(5000);
console.log('ready to accept request');



