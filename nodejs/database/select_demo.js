var connection  = require('./connection');
 var sql = 'select * from category ';
 connection.con.query(sql, function(error,result){
    if(error !=null){
        console.log(error);
    }
    else{
        console.log('delete opration succefulley');
    }
 });
 