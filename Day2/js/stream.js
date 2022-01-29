const fs=require("fs")
/*const readerpointer=fs.createReadStream('./data/sample2.txt')
//console.log(readerpointer)

//data, end, err
var data=""
readerpointer.on("data",(chunk)=>{
    data=data+chunk
    console.log(chunk)
})

readerpointer.on("end",(chunk)=>{
    console.log(data);
})

readerpointer.on("err",(chunk)=>{
    console.log(err);
})
*/

const WritePointer=fs.createWriteStream('./data/writefile.txt')
WritePointer.write("Create data",'utf-8')
WritePointer.end()
WritePointer.on("finish",()=>
{
    console.log("finish");
})
WritePointer.on("err",(err)=>
{
    console.log("the error is",err);
}) 
