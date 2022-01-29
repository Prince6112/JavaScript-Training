const fs=require("fs")
fs.readFile('./data/sample.txt','utf-8',(err,data)=>{
if(err){
    console.log(err)
}
setTimeout(()=>console.log(data),2000)
})
fs.readFile('./data/sample2.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log(data)
    })