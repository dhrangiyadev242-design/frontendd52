var connection = require('./connection');

//creat sql statement for insaert opration
sql = "insert into category (name,detail,photo)values('xyz','xyz detail','photo2.jpg')";

//run sql statement
connection.con.query(sql, function(error,result){
    if(error !=null){
        console.log(error);
    }
    else{
        console.log('category insert  succefulley');
    }
});