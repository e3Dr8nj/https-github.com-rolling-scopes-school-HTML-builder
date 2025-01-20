/*
const fs = require('fs');
const path = require('path');
function readFile(){
const filePath = path.join(__dirname,"text.txt");

const readStream = fs.createReadStream(filePath,'utf8');
readStream.pipe(process.stdout);
readStream.on('error',(err)=>{console.error('error occurs in process reading the file : ',err.message)})
}
readFile()
*/
const fs = require('fs');

const path = require('path');
async function readFile(){
    const filePath = path.join(__dirname,"text.txt");
    try{
      await fs.promises.access(filePath);
      const readStream = fs.createReadStream(filePath,'utf8');
      readStream.pipe(process.stdout);
      readStream.on('error',(err)=>{
        console.error('an error occurs due reading file process',err.message)
      })
    }catch(err){
        console.error(`file does not exist on unaccessable `,err.message);
    }
}
readFile()