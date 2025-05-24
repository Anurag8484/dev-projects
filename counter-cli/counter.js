const fs = require("fs");
const {Command }  = require('commander')
const program = new Command();

program
    .name('counter')
    .description('CLI to some JS Word Counting Utilities')
    .version('0.8.4');

program.command('wc')
    .description("Counts the word inside a file which is in given path")
    .argument('<path>', 'Path of the File')
    .action((file)=>{
        fs.readFile(file, 'utf-8', (err,data)=>{
            if (err){
                console.error(err)
            } else{
                const words = data.trim().split(/\s+/).length;
                console.log(`There are ${words} words in ${file}`);
                console.log(process.argv)
            }
        });
    });

program.command('lc')
    .description("Counts the word inside a file which is in given path")
    .argument('<path>', 'Path of the File')
    .action((file)=>{
        fs.readFile(file, 'utf-8', (err,data)=>{
            if (err){
                console.error(err)
            } else{
                const lines = data.split("\n").length;
                console.log(`There are ${lines} Lines in ${file}`);
            }
        });
    });

program.parse();
  