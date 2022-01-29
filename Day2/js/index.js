//Task manager application
const {addtask,viewtask}=require("./methods.js")
const notes = require("./notes")
const yargs=require("yargs")
const argv=yargs.argv
console.log("welcome to task manager")

if(argv._[0]==1)
    {
        const taskname=argv._[1]
        const deadline=argv._[2]
        //console.log(taskname,deadline)
        addtask(taskname,deadline)
        break
    }




/*


console.log("Press 1 for new task")
    console.log("Press 2 for update task")
    console.log("Press 3 for view tasks")
*/