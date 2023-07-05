// task-1
// console.log('hello world');

// task-2

// const http=require('http')
// http.createServer((req,res)=>{
//     res.write('<h1>Hello Node!!!!<h1>/n')
//     res.end()
// }).listen(3000)
// task-3
const fs=require("fs")
fs.writeFile('welcome.txt','hello node!',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('its ok')
    }
})
fs.readFile('welcome.txt','utf-8',(err,data)=>{
    if(err) {
        console.log(err)
    }  
    else{
        console.log(data)
    }     
})