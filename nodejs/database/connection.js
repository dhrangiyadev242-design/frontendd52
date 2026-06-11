//import module
var mysql = require('mysql');
//creat object that has connection detail
var config={
    host:"localhost",
    user:"root",
    password:"",
    port:3306,
    database:"frontend52"
};
//creat connection object
var con = mysql.createConnection(config);


//star connection
con.connect(function(error){
    //function will run after connection is failed or successful
    if(error != null){
        //if connection failed error will not be null
        console.log(null);

    } 
    else{
        console.log('connection created successfully');

    }
});
//this is required then only we can use con object in other javascript file
module.exports.con = con

