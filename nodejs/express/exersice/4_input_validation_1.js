// 3) create route /users which can accept request by get post put & delete method. 
//      store id(auto generated) ,name, gender, dob, weight, email   
//         use get method to get all users
//         use post method to insert new users
//         use put method to update product using id (all fields except id can be updated)
//         use delete method to delete product using id 
//redevelop exercise 3 and do input validation 

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
 
 //input validation (check whether is input or not and it is proper format)
 app.post("/user", function (request, response) {
     var id = list.length + 1;
     var name = request.body.name;
     var gender = request.body.gender;
     var dob = request.body.dob;
     var weight = request.body.weight;
     var email = request.body.email;
    if(request.body.name == undefined || request.body.name == "")
{
    return response.send("name is required");
}
else if(request.body.gender == undefined || request.body.gender == "")
{
   return response.send("gender is required");
}
else if(request.body.dob == undefined || request.body.dob == "")
{
   return response.send("dob is required");
}

else if(request.body.email == undefined || request.body.email == "")
{
  return  response.send("email is required");
}
else if(request.body.weight == undefined || request.body.weight == "")
{
    return response.send("weight is required");
}
else if(isNaN(request.body.weight))
{
    return response.send("weight must be numeric");
}

    var user = { 'id': id, 'name': name, 'gender': gender, 'dob': dob, 'weight': weight, 'email': email };

     //creat object
     
     list.push(user);
      response.json({'success':'yes'},{'error':'no'});

 }); 
 //  use put method to update product using id (all fields except id can be updated)
 
 app.put("/user", function (request, response) {

    if(request.body.id == undefined || request.body.id == "")
    {
        return response.send("id is required");
    }

    if(request.body.name == undefined || request.body.name == "")
    {
        return response.send("name is required");
    }

    if(request.body.gender == undefined || request.body.gender == "")
    {
        return response.send("gender is required");
    }

    if(request.body.email == undefined || request.body.email == "")
    {
        return response.send("email is required");
    }

    if(request.body.weight == undefined || isNaN(request.body.weight))
    {
        return response.send("weight must be numeric");
    }

    let user = list.find(item => item.id == request.body.id);

    if(user == undefined)
    {
        return response.send("User not found");
    }

    user.name = request.body.name;
    user.gender = request.body.gender;
    user.dob = request.body.dob;
    user.weight = request.body.weight;
    user.email = request.body.email;

    return response.json({
        success: "yes",
        user: user
    });
});app.put("/user", function (request, response) {

    if(request.body.id == undefined || request.body.id == "")
    {
        return response.send("id is required");
    }

    if(request.body.name == undefined || request.body.name == "")
    {
        return response.send("name is required");
    }

    if(request.body.gender == undefined || request.body.gender == "")
    {
        return response.send("gender is required");
    }

    if(request.body.email == undefined || request.body.email == "")
    {
        return response.send("email is required");
    }

    if(request.body.weight == undefined || isNaN(request.body.weight))
    {
        return response.send("weight must be numeric");
    }

    let user = list.find(item => item.id == request.body.id);

    if(user == undefined)
    {
        return response.send("User not found");
    }

    user.name = request.body.name;
    user.gender = request.body.gender;
    user.dob = request.body.dob;
    user.weight = request.body.weight;
    user.email = request.body.email;

    return response.json({
        success: "yes",
        user: user
    });
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