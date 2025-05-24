const fs = require("fs");
const { Command } = require("commander")
const program = new Command();

const file = './todos.json'

program
    .name('todo')
    .description('CLI to Add & Delete ToDo(s)')
    .version('0.8.5');
program
    .command('add')
    .description('Add the todo')
    .argument('<task>', 'Task to add to ToDo List.')
    .action((task)=>{

        fs.readFile(file,'utf-8',(err,jdata)=>{
            if (err){
                console.error(err);
                return;
            }

            let data;
            try {
                data = JSON.parse(jdata);
            }catch (err){
                console.error(err);
                return;
            }

            const item = {
                id: data.length + 1,
                task: task,
                status: "pending"
            };
            data.push(item);

            fs.writeFile(file,JSON.stringify(data,null,2), (err)=>{
                if (err){
                    console.error(err)
                } else{
                    console.log(`Added: "${task}"`)
                }
            });
        });
    });



program
    .command('delete')
    .description('Delete the todo')
    .argument('<task>', 'Delete the task from ToDo List.')
    .action((task)=>{

        fs.readFile(file,'utf-8',(err,jdata)=>{
            if (err){
                console.error(err);
                return;
            }

            let data;
            try {
                data = JSON.parse(jdata);
            }catch (err){
                console.error(err);
                return;
            }

            let index = 0;

            try{
                for(let i=0;i<data.length;i++){
                    if (data[i].task === task){
                        index = i
                    } 
                }
                if (!index){
                    console.log("Task Not Found");
                    return;
                }
            }catch(err){
                console.error(`${err}`)
            }

            // console.log(index);

            data.splice(index,1);

            fs.writeFile(file,JSON.stringify(data,null,2), (err)=>{
                if (err){
                    console.error(err)
                } else{
                    console.log(` Following Task has been sucessfully deleted: "${task}"`)
                }
            });
        });
    });

program
    .command('mark')
    .description('Mark the todo')
    .argument('<task>', 'Mark the task  from ToDo List.')
    .argument('<status>', 'Status to be Marked.')
    .action((task,status)=>{

        fs.readFile(file,'utf-8',(err,jdata)=>{
            if (err){
                console.error(err);
                return;
            }

            let data;
            try {
                data = JSON.parse(jdata);
            }catch (err){
                console.error(err);
                return;
            }

            let index = 0;

            try{
                for(let i=0;i<data.length;i++){
                    if (data[i].task === task){
                        data[i].status = status
                        index++;
                    } 
                }
                if (!index){
                    console.log("Task Not Found");
                    return;
                }
            }catch(err){
                console.error(`${err}`)
            }

            // console.log(index);


            fs.writeFile(file,JSON.stringify(data,null,2), (err)=>{
                if (err){
                    console.error(err)
                } else{
                    console.log(` Following Task has been sucessfully Marked completed: "${task}"`)
                }
            });
        });
    });


program
    .command('update')
    .description('Update the Current Task.')
    .argument('<task>', 'Old Task.')
    .argument('<utask>', 'Updated Task.')
    .action((task,utask)=>{

        fs.readFile(file,'utf-8',(err,jdata)=>{
            if (err){
                console.error(err);
                return;
            }

            let data;
            try {
                data = JSON.parse(jdata);
            }catch (err){
                console.error(err);
                return;
            }

            let index = 0;

            try{
                for(let i=0;i<data.length;i++){
                    if (data[i].task === task){
                        data[i].task = utask
                        index++;
                    } 
                }
                if (!index){
                    console.log("Task Not Found");
                    return;
                }
            }catch(err){
                console.error(`${err}`)
            }

            // console.log(index);


            fs.writeFile(file,JSON.stringify(data,null,2), (err)=>{
                if (err){
                    console.error(err)
                } else{
                    console.log(` Following Task has been sucessfully Updated From:"${task}" to: ${utask}`)
                }
            });
        });
    });

program
    .command('clear')
    .description('Clear all the Current Tasks.')
    .action(()=>{

        fs.readFile(file,'utf-8',(err,jdata)=>{
            if (err){
                console.error(err);
                return;
            }

            let data;
            try {
                data = JSON.parse(jdata);
            }catch (err){
                console.error(err);
                return;
            }

            data = [];



            fs.writeFile(file,JSON.stringify(data,null,2), (err)=>{
                if (err){
                    console.error(err)
                } else{
                    console.log(`All tasks are cleared now.`)
                }
            });
        });
    });

program.parse();


