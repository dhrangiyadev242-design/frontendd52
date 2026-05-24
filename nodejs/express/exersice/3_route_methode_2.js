// // 3) create route /users which can accept request by get post put & delete method. 
//      store id(auto generated) ,name, gender, dob, weight, email   
//         use get method to get all users
//         use post method to insert new users
//         use put method to update user using id (all fields except id can be updated)
//         use delete method to delete product using id 

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//crreat middle wear
app.use(express.urlencoded({ 'extended': true }));
app.use(bodyParser.json());

var list = [
    {
        "id": 1,
        "name": "Rahul",
        "gender": "Male",
        "dob": "2000-05-10",
        "weight": 65,
        "email": "rahul@gmail.com"
    },
    {
        "id": 2,
        "name": "Priya",
        "gender": "Female",
        "dob": "1998-08-20",
        "weight": 55,
        "email": "priya@gmail.com"
    },
    {
        "id": 3,
        "name": "Amit",
        "gender": "Male",
        "dob": "2001-12-15",
        "weight": 70,
        "email": "amit@gmail.com"
    }
];
// use get method to get all users
app.get("/user", function (request, response) {
    response.json(list);
});

//use post method to insert new users
app.post("/user", function (request, response) {
    var id = list.length + 1;
    var name = request.body.name;
    var gender = request.body.gender;
    var dob = request.body.dob;
    var weight = request.body.weight;
    var email = request.body.email;
    //creat object
    var user = { 'id': id, 'name': name, 'gender': gender, 'dob': dob, 'weight': weight, 'email': email };

    list.push(user);
    response.json([{ 'error': 'no', 'success': 'yes', 'message': 'user inserted', 'user': 'products' }]);


});
//  use put method to update product using id (all fields except id can be updated)

app.put("/user", function (request, response) {
    var id = request.body.id;

    let user = list.find(item => item.id == id);
    if (user == undefined) {
        response.send([
            { "error": "yes" },
            { "message": "user not found" }
        ]);
    }
    else {
        user.name = request.body.name;
        user.gender = request.body.gender;
        user.dob = request.body.dob;
        user.weight = request.body.weight;
        user.email = request.body.email;
         response.send([
            { "success": "yes" },
            { "message": "user updated successfully" }
        ]);
    }

});
//  use delete method to delete user using id 

app.delete("/user",function(request,response){
       var id = request.body.id;
        let index = list.findIndex(item => item.id == id);

    if (index == -1) {
        response.send([
            { "error": "yes" },
            { "message": "user not found" }
        ]);
    }
    else {
        list.splice(index, 1);

        response.send([
            { "success": "yes" },
            { "message": "user deleted successfully" }
        ]);
    }
       
})

app.listen(5000, () => {
    console.log('ready to accept request');
});