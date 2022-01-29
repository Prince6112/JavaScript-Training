const functions=require("./index.js")
//console.log(functions)
//functions.test1("22.00000000")
functions.members.map((item)=>
{
    functions.test3(item.memberName)
}
)