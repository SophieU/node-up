var fs = require('fs');

fs.readdir(__dirname,function(err,files){
    console.log(files)
    if(!files.length){
        return console.log('\033[31m No files to show! \033[39m\n');
    }
    console.log(' Select which file or directory you want to see\n')
})