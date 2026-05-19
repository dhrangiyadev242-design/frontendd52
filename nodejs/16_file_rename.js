var fs = require('fs');

current_file = 'information.txt';

new_file = "info.txt";

fs.rename(current_file,new_file, function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log('file reneme succesfulley');
    }
});