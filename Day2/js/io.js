/*const os=require("os")
console.log(os.uptime())//type//release//totalmem//freemem
console.log(os.totalmem())
//q write the os specs to file using synvc and a sync


console.log(__dirname,__filename)

const path=require("path")
consoled.log(path)
*/



// 1. write the os specs to a file using sync 
//2. write diff types of data to a file and read it
// 3. merge two file with sync Write 
    // 4 . methods with os and path module
// os module path module fs module
/*const os=require("os")
console.log(os.uptime())
console.log(os.type())
console.log(os.release())
console.log(os.totalmem())
console.log(os.freemem())
console.log(__dirname)
console.log(__filename)

const path=require("path")
const filepath=path.join("/data","memberdata.js")
console.log(filepath)
const abspath=path.resolve(__dirname,"module1.js")
console.log(abspath)



const fs=require("fs")
const path=require("path")
const filepath=path.join("./data","sample.txt")
console.log(filepath)
const data=fs.readFileSync("./data/sample.txt",'utf-8')
console.log(data)
fs.writeFileSync("./data/sample2.txt",data)
*/

// 1. write the os specs to a file using sync 

/*
const os=require("os")
console.log(os.uptime())
console.log(os.type())
console.log(os.release())
console.log(os.totalmem())
console.log(os.freemem())

data="OS uptime is "+os.uptime()+"\nOS type is "+os.type()+"\nOS release is "+os.release()+"\nOS free memory is "+os.freemem()
const fs=require("fs")
const path=require("path")
fs.writeFileSync("./data/OSdata.txt",data)
*/


// 3. merge two file with sync Write 
const fs=require("fs")
const data=fs.readFileSync("./data/sample.txt",'utf-8')
const data2=fs.readFileSync("./data/sample2.txt",'utf-8')
fs.writeFileSync("./data/merged.txt",data+data2)

fs.open("./data/sample.txt",)