//creat template

function Mail(receiver,subject,message){
    //creat local variable

    this.receiver = receiver,
    this.subject = subject,
    this.message = message;

    this.sendEmail = function(){
      console.log("mail send to",this.receiver);
      console.log("subject", this.subject , "message", this.message);
    }
}
module.exports.Mail = Mail;