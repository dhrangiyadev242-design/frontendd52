var event = require('events');

var em =new event.EventEmitter();

//creat event emitted
//creat 3 function that will run in case of emergency
em.addListener("emergency", function(email){
    console.log('I have send email to='+ email);
});
em.on("emergency", function(phone){
    console.log('I have send sms on='+ phone);
});
em.once("emerency", function (phone){
    console.log("Informed police....");
});

//use function when there is emergency event
em.emit("emergency","abc");
em.emit("emergency","res");
