const fs = require('fs');
const path= require('path');
const dirPath = path.join(__dirname,'secret-folder');
console.log(dirPath);
fs.readdir(dirPath, {withFileTypes:true}, (err,files)=>{
    if(err){console.error("error occurs due reading files ",err.message);return};
   // console.log(files);
    files.forEach(file => {
      if(file.isFile()){
        const filePath = path.join(dirPath,file.name);
        fs.stat(filePath,(err,stats)=>{
          if(err){console.error('error due resiving information about file ',err.message);return;}
          const extName = path.extname(file.name);
          const size = stats.size;
          process.stdout.write(`${file.name}-${extName}-${(size/1024).toFixed(3)}kb \n`);
        })
      }
    });
})