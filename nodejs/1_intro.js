function printCuurentDate(){
    let today = new Date;

    let currentDate = today.getDate()  + "/" + (today.getMonth() +1)+ "/" + today.getFullYear();
          console.log(currentDate);

}
printCuurentDate();

function printCuurentTime(){
    let today = new Date;

    let currentTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
     console.log(currentTime)
}
printCuurentTime();

