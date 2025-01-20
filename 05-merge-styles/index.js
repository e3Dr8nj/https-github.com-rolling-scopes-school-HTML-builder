const fs = require('fs');
const path= require('path');
const dirPathStyles = path.join(__dirname,'styles');
const bundlePath = path.join(__dirname, 'project-dist', 'bundle.css');
async function mergeStyles(){
  try{
   let stylesArr = [];
   const files = await fs.promises.readdir(dirPathStyles,{withFileTypes:true});
   const styleFiles = files.filter(file=>file.isFile()&&path.extname(file.name)===".css");
   for(const file of stylesFiles){
    // let data = await fs.promises.readFile(path.join(dirPathStyles,file.name),'utf-8',(err,data));
     const filePath = path.join(dirPathStyles,file.name);
    // const readStream =  fs.createReadStream(filePath,'utf-8');
    // readStream.pipe(stylesArr.push(data));
     const data = await fs.promises.readFile(filePath,'utf-8');
     stylesArr.push(data);
     console.log(stylesArr)


   }
  }catch(err){console.error('error occurs due merging styles',err.message)};
}
mergeStyles();