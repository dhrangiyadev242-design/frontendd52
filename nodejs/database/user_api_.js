const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./connection');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
//api of users Register
app.post("/users/register", (request, response) => {
    let name = request.body.name;
    let email = request.body.email;
    let mobile = request.body.mobile;
    let password = request.body.password;
    //response.json({error:'API working'});
    if (!name || !email || !mobile || !password) {
        return response.json({ error: 'All Fileds Are Require' });
    }
        let regex = /^(?=(?:.*[A-Za-z]){2,})[A-Za-z0-9]{6,}$/;

    if (!regex.test(password)) {
        return response.status(400).json({
            success: false,
            message: "Password must be at least 6 characters long and contain at least 2 letters."
        });
    else {
        let sql = 'select * from users where email=?';
        connection.con.query(sql, [email], function (error, result) {
            if (error) {
                return response.json({ error: 'oops something wrong' });
            }
            if (result.length > 0) {
                return response.json({
                    error: 'Email already registered'
                })
            }
            else {
                let insertSql =
                    "INSERT INTO users(name,email,mobile,password) VALUES(?,?,?,?)";
                connection.con.query(
                    insertSql,
                    [name, email, mobile, password],
                    function (error, result) {
                        if (error) {
                            return response.json({
                                error: error.message
                            });
                        }
                        response.json({
                            success: true,
                            message: "User Registered Successfully",
                            id: result.insertId
                        });

                    }
                );
            }
        });
    }
});
 //Api of users Login
   app.post("/users/login",(request,response)=>{
    //Receive Data
    let email = request.body.email;
    let password = request.body.password;
    //validation
    if(!email || !password){
        return response.json({error:'Email and Password are required'});
    }
        let regex = /^(?=(?:.*[A-Za-z]){2,})[A-Za-z0-9]{6,}$/;

    if (!regex.test(password)) {
        return response.status(400).json({
            success: false,
            message: "Password must be at least 6 characters long and contain at least 2 letters."
        });
    else{
        //SQL Query
        let sql = 'select * from users where email=?';
        //Execute Query
        connection.con.query(sql,[email],function(error,result){
            //Database Error
            if(error){
                return response.json({error:error.message});
            }
            //Email Check
            if(result.length == 0){
                return response.json({error:'invalid email'});
            }
            //User Object
            let user = result[0];
            //Password Check
            if(user.password !=password){
                  return response.json({error:'Invalid Password'});
            }
            //Success
                 response.json({success:true,message:'login successfully',user:{
                    id:user.id,
                    name:user.name,
                    email:user.email,
                    mobile:user.mobile
                 }});
        });
    }
   });
   app.post("/users/change_Password",(request,response)=>{
    //Recive data
    let email = request.body.email;
    let old_Password = request.body.old_Password;
    let new_Password = request.body.new_Password;
     //validation
     if(!email || !old_Password || !new_Password){
        return response.json({error:'All Fields Are Require'});
     }
         let regex = /^(?=(?:.*[A-Za-z]){2,})[A-Za-z0-9]{6,}$/;

    if (!regex.test(new_password)) {
        return response.status(400).json({
            success: false,
            message: "Password must be at least 6 characters long and contain at least 2 letters."
        });
     else{
        let sql = 'select * from users where email=?';
        connection.con.query(sql,[email],function(error,result){
            if(error){
                return response.json({error:'database error'});
            }
            else{
                if(result.length == 0){
                    return response.json({error:'user not found'});
                }
                let user = result[0];
                if(user.password !=old_Password){
                   return response.json({error:'old password is incorrect'});
                }
                let sql = 'update users set password=? where email=?';
                connection.con.query(sql,[new_Password,email],function(error,result){
                    if(error){
                        return response.json({error:'password update failed'});
                    }
                 response.json({success:true,
                    message:'password updated successfulley'});
                });
            }
        });
     }
   });
   app.post("/users/forgot_Password",(reqest,response)=>{
     //receive data
     let email = reqest.body.email;
     let new_Password = reqest.body.new_Password;
     //validation 
     if(!email || !new_Password){
        return response.json({error:'All Fields Are Require '}); 
     }
         let regex = /^(?=(?:.*[A-Za-z]){2,})[A-Za-z0-9]{6,}$/;

    if (!regex.test(new_Password)) {
        return response.status(400).json({
            success: false,
            message: "Password must be at least 6 characters long and contain at least 2 letters."
        });
     else{
        let sql = 'select * from  users where email=?';
        connection.con.query(sql,[email],function(error,result){
            if(error){
                return response.json({error:'database error'});
            }
            if(result.length == 0){
                return response.json({error:'Email Not Registerd'});
            }
            let sql = 'update users set Password=? where email=?';
            connection.con.query(sql,[new_Password,email],function(error,result){
                if(error){
                    return response.json({error:'new_Password update is failed'});
                }
                response.json({success:true,
                    message:'Password Reset Successfully'
                });
            })
        });
     }
   });

app.listen(5000);
console.log('ready to accept request');


