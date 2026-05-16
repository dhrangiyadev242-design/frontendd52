//import local module
//here dt is alive for datrtime(we must use it call function)

const dt = require('./datetime');
const m = require('./math_module');
const ms = require('./messenger');
const pwd = require('./sequirety');

console.log(dt.getDate());
console.log(dt.getTime());

//call function from mymath

let num1 = 90;
let num2 = 9;

console.log("addition",m.add(num1,num2));
console.log("subtraction",m.sub(num1,num2));
console.log("multiplication",m.mul(num1,num2));
console.log("division",m.div(num1,num2));


//creat object
//massnger
let mailer = new ms.Mail('ram@gmail.com','test subject', 'test massager');
mailer.sendEmail();

original_password = "apple";
//creat object
//passwordmanager
let p = new pwd.passwordManager();
let Hashed_Password = p.getHashPassword();
console.log(Hashed_Password);

