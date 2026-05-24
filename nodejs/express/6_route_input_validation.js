var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

var list =[
    {'name':'ram','mobile':1234567890},
    {'name':'bharat','mobile':9087654321},
    {'name':'manas','mobile':5678094321},
];
app.get("/contact",function(request,response){
    response.json(list);
});
app.post("/contact", function (request, response) {
    var name = request.body.name;
    var mobile = request.body.mobile;
    //input validation (check whether is input or not and it is proper format)
    if (!name || !mobile) {
       return  response.json([{ 'error': 'input is missing' }])
    }
    //regular expression (check whether string is as per given pattern or not) 
    else if (/^\d+$/.test(mobile) == false) {
        response.json([{ 'error': 'mobile must have only digits' }])
    }
    // mobile must be only digits and must be of 10 digits long(length)
    else if (mobile.length != 10) {
        response.json([{ 'error': 'mobile must be of 10 digits' }])
    }
   else {
       var person = { 'name': name, 'mobile': mobile };
       // object insert into list 
list.push(person);

   response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'contact inserted' }])

    }
    //create object

});
//used to update existing contact in list 
// input: name, mobile 

app.put("/contact", function (request, response) {

    var name = request.body.name;
    var mobile = request.body.mobile;

    // Input validation
    if (!name || !mobile) {
    return response.json([{ 'error': 'input is missing' }]);
}
    // Mobile must contain only digits
    else if (/^\d+$/.test(mobile) == false) {
        return response.json([{ 'error': 'mobile must have only digits' }]);
    }

    // Mobile must be exactly 10 digits
    else if (mobile.length != 10) {
        return response.json([{ 'error': 'mobile must be of 10 digits' }]);
    }

    var isUpdate = false;

    list.filter((item) => {
        if (item.name === name) {
            item.mobile = mobile;
            isUpdate = true;
        }
    });

    if (isUpdate) {
        response.json([
            { 'error': 'no' },
            { 'success': 'yes' },
            { 'message': 'contact updated' }
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

//used to delete existing contact in list 
// input: name (Bharat)

   app.delete("/contact", function (request, response) {

    var name = request.body.name;

    if (!name) {
        return response.json([
            { 'error': 'input is missing' }
        ]);
    }

    var filteredList = list.filter((item) => {
        return item.name !== name;
    });

    if (list.length === filteredList.length) {
        return response.json([
            { 'error': 'no' },
            { 'success': 'no' },
            { 'message': 'contact not found' }
        ]);
    }

    list = filteredList;

    response.json([
        { 'error': 'no' },
        { 'success': 'yes' },
        { 'message': 'contact deleted' }
    ]);
});

    
app.listen(5000,()=>{
   console.log('ready to accept request');
});