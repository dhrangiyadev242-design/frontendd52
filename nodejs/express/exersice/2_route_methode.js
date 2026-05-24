/*2) create route /product which can accept request by get post put & delete method. 
     store id(auto generated),name, price, weight, size 
        use get method to get all product
        use post method to insert new product
        use put method to update product using id (all fields except id can be updated)
        use delete method to delete product using id 
 */

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//define middle wear
app.use(express.urlencoded({ 'extended': true }));
app.use(bodyParser.json());

var list = [
    { id: 1, name: "Mobile", price: 15000, weight: "200g", size: "6.5 inch" },
    { id: 2, name: "Laptop", price: 55000, weight: "2kg", size: "15.6 inch" },
    { id: 3, name: "Keyboard", price: 1200, weight: "500g", size: "Standard" },
    { id: 4, name: "Mouse", price: 600, weight: "100g", size: "Medium" },
    { id: 5, name: "Monitor", price: 12000, weight: "4kg", size: "24 inch" }
];

app.get("/products", function (request, response) {
    response.json(list);
})
app.post("/products", function (request, response) {
    var id = list.length + 1;
    var name = request.body.name;
    var price = request.body.price;
    var weight = request.body.weight;
    var size = request.body.size;

    //creat object;
    var products = { 'id': id, 'name': name, 'price': price, 'weight': weight, 'size': size };
    //object insert into products
    list.push(products);


    response.json([{ 'error': 'no', 'success': 'yes', 'message': 'products inserted', 'prouducts': 'products' }]);

});
app.put("/products", function (request, response) {
 var id = request.body.id;  let user = list.find(item => item.id == id);
    if (user == undefined) {
        response.send([
            { "error": "yes" },
            { "message": "user not found" }
        ]);
    }
    else {
        user.name = request.body.name;
        user.price = request.body.price;
        user.weight = request.body.weight;
        user.size = request.body.size;
       
         response.send([
            { "success": "yes" },
            { "message": "user updated successfully" }
        ]);
    }


});

app.delete("/products", function (request, response) {

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
       
    // var id = request.body.id;

    // var fileredList = list.filter((item) => {
    //     if (id !== item.id)
    //         return item;
    // });


    // if (list.length === fileredList.length) {
    //     response.send([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'contact not found' }]);
    // }

    // else {
    //     list = fileredList;
    //     response.send([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'contact deleted' }]);
    // }
});
app.listen(5000);
console.log('ready to accept request');