const fs = require('fs');
const path= require('path');
const dirPath = path.join(__dirname,'files');
const dirPathCopy = path.join(__dirname,'files-copy');
async function copyDir(){
  try{
    await fs.promises.mkdir(dirPathCopy,{recursive: true});
    const files = await fs.promises.readdir(dirPath,{withFileTypes:true});
    for(const file of files){
        if(file.isFile()){
            await fs.promises.copyFile(path.join(dirPath,file.name),path.join(dirPathCopy,file.name),);
          }
       }
  }catch(err){console.error('error occurs due copy dir ',err.message)};
};
copyDir();