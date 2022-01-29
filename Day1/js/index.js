

const test1=(age)=>
{

    if(age==22)
    {
        console.log("Executed")
    }
}

const test2=()=>
{
    const age="22"

    if(age==22)
    {
        console.log("Secret")
    }
}

const test3=(name)=>
{
console.log("Hello",name,"Welcome")
}

const members=[
    {
    memberName:"John",
    ID:"1"
    },
    {
        memberName:"John2",
        ID:"2"
    },
    {
        memberName:"John3",
        ID:"3"
    }
]

module.exports={test1,test3,members}
//console.log(module.exports)