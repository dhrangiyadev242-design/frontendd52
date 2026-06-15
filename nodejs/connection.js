//import module
 var mysql = require('mysql');
 //creat object has connetion detail
 var config = {
    host : 'localhost',
    user : 'root',
    password : '',
    port : 3308,
   database: "frontend52"

 };
 //creat connetion object
 var con = mysql.createConnection(config);

 //star connnetion
 con.connect(function(error){
    //function will run after connetion is feiled or succefull
    if(error !=null){
        console.log(error);
    }
    else{
        console.log('connection created successfulley');
    }
 });
 //this required then only we can use con object in other javascript  file
 module.exports.con =  con;
 