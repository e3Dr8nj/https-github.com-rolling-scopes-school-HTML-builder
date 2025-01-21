/*
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
  //appendFile();
function exit(){
    process.stdout.write('Good bye\n');
    process.exit(0);
}
*/
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname,"text.txt");
const readline = require('readline');
fs.writeFile(filePath,'','utf8',(err)=>{
    if(err){ 
     console.error("error creating file",err.message);
    }else{
     console.log("file created");
     startInput();
    }
   })
function startInput(){
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  process.stdout.write('Input some text ,type "exit" to quit:');
  rl.on('line',(input)=>{
    if(input.trim()==="exit"){
        rl.close();
    }else{
        appendFile(input);
        
    }
  })
  rl.on('close',()=>{
    exit();
  })

process.on('SIGINT',()=>{
    rl.close();
})
}

function exit(){
    process.stdout.write('\nGood bye\n');
    process.exit(0);
}
function appendFile(input){
    fs.appendFile(filePath, input + '\n', 'utf-8', (err) => {
        if (err) {
            console.error('Error appending to file:', err.message);
        } else {
           
            process.stdout.write('Input some text ,type "exit" to quit:');
        }
    });
}