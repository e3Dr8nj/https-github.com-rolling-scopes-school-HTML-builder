const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname,"text.txt");
fs.writeFile(filePath,'','utf8',(err)=>{
    if(err){ 
     console.error("error creating file",err.message);
    }else{
     console.log("file created");
     appendFile();
    }
   })
 function appendFile(){  
   process.stdout.write('input data \n')
   process.stdin.on("data",(data)=>{
    if(data.toString().trim()==="exit") return exit();
  fs.appendFile(filePath,data,'utf-8',(err)=>{
    if(err){
      console.error('error due append file process');
    }else{
      console.log('file updated')
    }
  })

})
 }
process.on('SIGINT',()=>{
    exit();
})
function exit(){
    process.stdout.write('Good bye\n');
    process.exit(0);
}
