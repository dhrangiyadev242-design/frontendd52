let express = require('express');
var bodyParser = require('body-parser');
let app = express();
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

let list = [
    { email: "lalji@gmail.com", passsword: "123456" },
    { email: "ram@gmail.com", passsword: "122456" },
    { email: "bharat@gmail.com", passsword: "123654" },
    { email: "manas@gmail.com", passsword: "123436" },
]

app.get("/list", (request, response) => {
    response.json(list);
});
app.post("/list", (request, response) => {
    let email = request.body.email;
    let password = request.body.password;
    //input validation
    if (!email || !password) {
        return response.json({ error: 'input are missing' });
    }
    if (password.length != 6) {
        response.json({ error: 'password must have 6 digit' });
    }
    //cheak 
    else {
        let register = { 'email': email, 'password': password }
        list.push(register);
        response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'inserted' }]);
    }
});
app.put("/list", (request, response) => {
 let email = request.body.email;
 let password = request.body.password;
 if(!email || !password){
   return response.json({error:'input is missing'});
 }
 else if(password.length !=6){
    return response.json({error:'password must have 6 digit'});
 }
 var isUpdate = false;
    list.filter((item) => {
        if (item.email === email) {
            item.password = password;
            isUpdate = true;
        }
    });
     if (isUpdate) {
        response.json([
            { 'error': 'no' },
            { 'success': 'yes' },
            { 'message': 'list updated' }
        ]);
    }
      else {
        response.json([
            { 'error': 'no' },
            { 'success': 'no' },
            { 'message': 'contact not found' }
        ]);
    }
});
app.delete("/list", (request, response) => {
     let email = request.body.email;
    if (!email) {
        return response.json([
            { 'error': 'input is missing' }
        ]);
    }
    let filteredList = list.filter((item) => {
        return item.email !== email;
    });
    if (list.length === filteredList.length) {
        return response.json([
            { 'error': 'no' },
            { 'success': 'no' },
            { 'message': 'list not found' }
        ]);
    }
    list = filteredList;
    response.json([
        { 'error': 'no' },
        { 'success': 'yes' },
        { 'message': 'list deleted' }
    ]);
});
app.listen(5000);
console.log('ready to accept request');
