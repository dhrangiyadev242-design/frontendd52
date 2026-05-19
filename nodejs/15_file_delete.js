
var fs = require('fs');

filename = 'data.txt';
fs.unlink(filename, function(error){
    if(error){
        console.log(error);

    }
    else{
       console.log('file deleted succesefully');
    
    }


});

