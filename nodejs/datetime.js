//local module example

function getCurrentDate(){
    let today =new Date();
    
    let currentDate =today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear();
    return currentDate;
}

function getCurrentTime(){
    let now = new Date();

    let time= now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    return time;
}
//export function (compulsory)

module.exports.getDate = getCurrentDate;
module.exports.getTime = getCurrentTime;
//now onwords we will use getdate and gettime aqs words to call function