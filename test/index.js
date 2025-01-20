/*
const fs = require('fs');
const path = require('path');
function readFile(){
const filePath = path.join(__dirname,"text.txt");

const readStream = fs.createReadStream(filePath,'utf8');
readStream.pipe(process.stdout);
readStream.on('error',(err)=>{console.error('error occurs in process reading the file : ',err.message)})
}
*/


//readFile()
/*
function getValue(flag){
    const flagIndex = process.argv.indexOf(flag);
    return (flagIndex!==-1)?process.argv[flagIndex+1]:null;
}
const message = getValue("-m");
console.log(message)
*/
/*
const protoObj={
    sayHi(){
        console.log('hi');
    }
}
const obj = {};
obj.__proto__=protoObj;
obj.sayHi();
*/
/*
const productionMode = process.env.PRODUCTION === "true";
if(productionMode){
    console.log('pm')
}else{console.log('no pm')}
//const {stdin,stdout} = process;
/*
process.on("data",(data)=>{
    const dataStringified = data.toString();
    stdout.write(dataStringified.toUpperCase())
})*/
/*  INPIT=>OUTPUT
stdin.on("data",(data)=>{
   stdout.write(data)
})*/
//const {stdin,stdout} = process;
/*
process.on('exit',(exit)=>{
    if(exit==0){
        stdout.write('Everything is ok')
    }else stderr.write(`Something went wrong. The program exited with code ${error}`)
})*/
/*
stdout.write('What is your name?\n')
stdin.on('data',(data)=>{
    stdout.write(`Hi ${data} Goodbye`)
    process.exit()
})
process.on('exit',()=>{stdout.write('Goodbye!')})
*/
/*
const myBuffer = Buffer.from("hI","utf-8")
console.log(myBuffer)
const bufferStringified = myBuffer.toString();
console.log(bufferStringified)
*/
/*
let userName = '';
stdout.write("Inter you name \n");
stdin.on("data",(data)=>{
     userName = [...data.toString()].reverse().join('');
    stdout.write(userName);
    process.exit()
})
*/
/*
const productionMode = process.env.PRODUCTION === "true";
if(productionMode){
    stdout.write("Application is running in production mode")
}else{
    stdout.write("Application is running in development mode")
}*/
/*
const { stdout, stdin, exit } = process;
const flag = process.argv[2];
const allowedFlags = ["-m","-s"];
if(!allowedFlags.includes(flag)){
    stdout.write("Try running the file with the -s or -m flag");
    exit();
}
stdout.write("Please entre two numbers\n");
stdin.on("data",(data)=>{
    const numString = data.toString();
    const numStringArray = numString.split(" ");
    const hasIncorrectLength = numStringArray.length!==2;
    const hasIncorrectValue = numStringArray.some((numStr)=>Number.isNaN(+numStr));

    console.log(numStringArray);
if(hasIncorrectLength||hasIncorrectValue){
    stdout.write(`You need to input two numbers separated by a space\n`);
    exit();
}
const [firstNum, secondNum] = numStringArray.map((numStr)=>+numStr);
if(flag === "-s"){
    const sum = firstNum + secondNum;
    stdout.write(`${sum}`);
}else{
    const mult = firstNum * secondNum;
    stdout.write(`${mult}`);
}
  exit();
})
  */
 /*
const { stdout,exit,argv} = process;
let flag  = argv[2];

let allowedFlags = ["-d","-f"];
let paths = [__dirname,__filename];
let index = allowedFlags.indexOf(flag);
console.log(index)
if(index==-1){
    stdout.write("You can run program with -d or -f flags!");
    exit();
}
stdout.write(paths[index]);


exit();
*/
/*
const fs = require('fs');
const path = require('path');
fs.mkdir(path.join(__dirname,'notes'),err=>{
    if(err) throw err;
    console.log('Folder was created');
})
fs.writeFile(path.join(__dirname,'notes','mynotes.txt'),"hello",err=>{
   if(err) throw err;
   console.log('file was created');
})
*/
/*
const http = require("http");
const PORT =3000;
const requestHandler = (request,response)=>{
    console.log("");
    response.write("Hello");
    response.end("Bye");
}
const server = http.createServer(requestHandler);
server.listen(PORT,"localhost",()=>{
    console.log(`Server is running on ${PORT}`)
})
    */

/*
const http = require("http");
const PORT = 3000;
const requestHandler =(request,response)=>{
    const heading = `<h1 style="color:red">${request.url}</h1>`
    response.write(heading);
    response.end('bye')
}
const server = http.createServer(requestHandler)
server.listen(PORT,"localhost",()=>{

})*/
const fs = require("fs");
const path = require("path");
const [command,title,content] = process.argv.slice(2);
const notesFilePath = path.join(__dirname,"notes3.js")
switch(command){
  case "list":
    break;
  case "view":
    break;
  case "create":
    create(title,content);
    break;
  case "title":
    break;
  default:
    console.log("Unknown command");
      
}
function create(title,content){
    fs.readFile("notes2.json",(err,data)=>{
        let notes = [];
        try{
            const notes = JSON.parse(data);
        }catch(err){notes=[]};
        
        console.log(notes);
        notes.push({title,content});
        console.log(notes)
        const json = JSON.stringify(notes);
   
    fs.writeFile("notes2.json",json,(err)=>{
        if(err) return console.error(err.message);
        console.log("Note create")
    })
})
}

function init(){
    fs.access(notesFilePath,fs.constants_F.OK,(err)=>{
        if(err){}else{}
    })
}
/*const fs = require('fs');
const path = require('path');

const notesFilePath = path.join(__dirname, 'notes2.json');

// Function to initialize notes2.json
function init() {
    fs.access(notesFilePath, fs.constants.F_OK, (err) => {
        if (err) { // If the file does not exist
            fs.writeFile(notesFilePath, JSON.stringify([]), 'utf8', (writeErr) => {
                if (writeErr) {
                    console.error("Error creating notes2.json:", writeErr);
                } else {
                    console.log("notes2.json file created with initial content.");
                }
            });
        } else {
            console.log("notes2.json file already exists.");
        }
    });
}

// Function to create a new note
function create(title, content) {
    fs.readFile(notesFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        let notes; // Declare notes outside the try block
        try {
            notes = JSON.parse(data);
        } catch (parseError) {
            console.error('Parsing error:', parseError);
            notes = []; // Initialize as an empty array if parsing fails
        }

        // Ensure notes is an array
        if (!Array.isArray(notes)) {
            console.error('Notes is not an array, resetting to empty array');
            notes = [];
        }

        console.log("Current notes:", notes); // Now this will work
        notes.push({ title, content });
        console.log("Updated notes:", notes);
        const json = JSON.stringify(notes);

        fs.writeFile(notesFilePath, json, 'utf8', (writeErr) => {
            if (writeErr) return console.error("Error writing to file:", writeErr.message);
            console.log("Note created");
        });
    });
}

// Initialize the notes.json file
init();

// Example usage of create function
create("Sample Title", "Sample content for testing.");
*/