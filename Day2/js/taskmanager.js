const fs=require("fs")
const addtask=(taskname,deadliness)=>
{

    const dataBuffer = fs.readFileSync('./data/tasks.json')
    const dataJson = dataBuffer.toString()
    notes= JSON.parse(dataJson)
    notes.push(newnote)
    fs.writeFileSync("notes.json",JSON.stringify(notes))

    
    console.log(taskname,deadliness)
    adddata="{Taskname:"+taskname+"\nDeadline"+deadliness
    const tasks=fs.readFileSync("./data/tasks.json",'utf-8')
    fs.writeFileSync("./data/tasks.json",tasks+adddata)
    const updated=fs.readFileSync("./data/tasks.json",'utf-8')
    console.log(updated)
}

const viewtask=()=>
{

    //[{ "books":"abc","author":"xyz"}]
}

const loadNotes = ()=>{
    try{

    }
    catch(e){
        return []
    }   
}

const saveNotes = (notes)=>{
    fs.writeFileSync("notes.json",JSON.stringify(notes))
}


module.exports={addtask,viewtask}