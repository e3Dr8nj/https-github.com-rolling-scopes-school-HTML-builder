const fs = require('fs');
const path= require('path');
const dirPathStyles = path.join(__dirname,'styles');
const bundlePath = path.join(__dirname, 'project-dist', 'bundle.css');

async function mergeStyles(dirPathStyles,bundlePath){
  try{
   
   let stylesArr = [];
   const files = await fs.promises.readdir(dirPathStyles,{withFileTypes:true});
   const styleFiles = files.filter(file=>file.isFile()&&path.extname(file.name)===".css");
   for(const file of styleFiles){
     // console.log(dirPathStyles)
     const filePath = path.join(dirPathStyles,file.name);
   
     const data = await fs.promises.readFile(filePath,'utf-8');
     stylesArr.push(data);
   
    }
  // const writeStream = fs.createWriteStream(bundlePath,'utf-8');
    await fs.promises.writeFile(bundlePath,stylesArr.join("\n"),'utf-8');
  }catch(err){console.error('error occurs due merging styles',err.message)};
}
mergeStyles(dirPathStyles,bundlePath);
module.exports = mergeStyles;