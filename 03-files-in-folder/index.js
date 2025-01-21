/*
const fs = require('fs');
const path= require('path');
const dirPath = path.join(__dirname,'secret-folder');
/console.log(dirPath);
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
    */
const fs = require('fs');
const path= require('path');
const dirPath = path.join(__dirname,'secret-folder');
async function readDir(){
  try{
    let files = await fs.promises.readdir(dirPath,{withFileTypes: true},(err,files)=>{
    return files;
  })
   for(const file of files){
     const filePath = path.join(dirPath,file.name);
      if(file.isFile()){
        const stats = await fs.promises.stat(filePath,(err,stats)=>{
            return stats;
        });
       
        const extName = path.extname(file.name).slice(1);
        const size = stats.size;
        process.stdout.write(`${path.parse(file.name).name} - ${extName} - ${(size/1024).toFixed(3)}kb \n`)
      
     };
   };
  }catch(err){
    console.error('error occurs due reading dir ',err.message )
  }
 
}
readDir();