const express = require('express');
const bcrypt = require("bcrypt");
const bodyParser = require('body-parser');
const connection = require('./connection');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
//api of users Register
app.post("/users/register", async (request, response) => {
    let name = request.body.name;
    let email = request.body.email;
    let mobile = request.body.mobile;
    let password = request.body.password;
    if (!name || !email || !mobile || !password) {
        return response.json({ error: 'All Fileds Are Require' });
    }
    else {
        let hashedPassword = await bcrypt.hash(password, 10);
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
                    [name, email, mobile, hashedPassword], //passowrd
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
app.post("/users/login", async (request, response) => {
    let email = request.body.email;
    let password = request.body.password;
    if (!email || !password) {
        return response.json({ error: 'Email and Password are required' });
    }
    else {
        let sql = 'select * from users where email=?';
        connection.con.query(sql, [email], async function (error, result) {
            if (error) {
                return response.json({ error: error.message });
            }
            if (result.length == 0) {
                return response.json({ error: 'invalid email' });
            }

            let user = result[0];
            let match = await bcrypt.compare(password, user.password);
            if (!match) {
                return response.json({ error: 'invalid password' });
            }
            response.json({
                success: true, message: 'login successfully', user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    mobile: user.mobile
                }
            });
        });
    }
});
app.post("/users/change_Password", async (request, response) => {
    let email = request.body.email;
    let old_Password = request.body.old_Password;
    let new_Password = request.body.new_Password;
    if (!email || !old_Password || !new_Password) {
        return response.json({ error: 'All Fields Are Require' });
    }
    else {
        let sql = 'select * from users where email=?';
        connection.con.query(sql, [email], async function (error, result) {
            if (error) {
                return response.json({ error: 'database error' });
            }
            else {
                if (result.length == 0) {
                    return response.json({ error: 'user not found' });
                }
                let user = result[0];
                let match = await bcrypt.compare(old_Password, user.password);
                if (!match) {
                    return response.json({ error: 'old password is incorrect' });
                }
                let hashedPassword = await bcrypt.hash(new_Password, 10)
                let sql = 'update users set password=? where email=?';
                connection.con.query(sql, [hashedPassword, email], async function (error, result) {
                    if (error) {
                        return response.json({ error: 'password update failed' });
                    }
                    response.json({
                        success: true,
                        message: 'password updated successfulley'
                    });
                });
            }
        });
    }
});
app.post("/users/forgot_Password", async (request, response) => {
    let email = request.body.email;
    let new_Password = request.body.new_Password;
    if (!email || !new_Password) {
        return response.json({ error: 'All Fields Are Require ' });
    }
    else {
        let sql = 'select * from  users where email=?';
        connection.con.query(sql, [email], async function (error, result) {
            if (error) {
                return response.json({ error: 'database error' });
            }
            if (result.length == 0) {
                return response.json({ error: 'Email Not Registerd' });
            }
            let hashedPassword = await bcrypt.hash(new_Password, 10);
            let sql = 'update users set Password=? where email=?';
            connection.con.query(sql, [hashedPassword, email], async function (error, result) {
                if (error) {
                    return response.json({ error: 'new_Password update is failed' });
                }
                response.json({
                    success: true,
                    message: 'Password Reset Successfully'
                });
            })
        });
    }
});

app.listen(5000);
console.log('ready to accept request');


