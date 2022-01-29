/*function sample(a,b)
{
    return a+b
}

let res=sample(10,20)
console.log(res)*/


const add=(a,b)=>{
    return a+b
}

console.log(add(10,200))

/*console.log("test")
const a=10
const b=a+1239
console.log(b)

let arr=[10,20,"output"]
console.log(arr)

/*let obj=[
    {
        a:"a",
        b:10,
        c:true
    },
    {
        a:"b",
        b:20,
        c:true
    }
];

obj.map((i)=>{
    console.log(i.a)
}
)
*/



/* FIRST QUESTION FILTER BETWEEN RANGE
const add=(a,b)=>{
    return a+b
}


const filterRange=(arr,a,b)=>
{
    const res=[];
    let index=0
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>=a && arr[i]<=b)
        {
        res[index]=arr[i]
        index+=1
        //console.log(arr[i]);
        }
    }
    return res
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(filtered)
alert(filtered)
alert(arr)


QUESTION TWO
function unique_elements(arr) {
    return (new Set(arr))
   }

let strings = ["React Js", "JavaScript", "React Js", "JavaScript",
    "JavaScript", "JavaScript", "React Js", "React Js"];

    console.log( unique_elements(strings) );

QUESTION THREE
function truncate(str,len)
{
    if (str.length<len)
        console.log(str)
    else
        console.log(str.substring(0,len-1)+"...")
}
truncate("What I'd like to tell on this topic is:", 20) 
truncate("Hi everyone!", 20) 


QUESTION FOUR
function extractCurrencyValue(str)
{
    return(Number( str.substring(1,str.length)))
}

alert( extractCurrencyValue('$120') === 120 );

*/