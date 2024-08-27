const {readFile, writeFile} = require('fs')
const { log } = require('util')


// This for loo was added to Obseve the File Writing Capability by Running This file you can see Things are happening in aSyncronization
// means that it is not Nessisary for one File to be put in first Before We could Write Other in Sence it wont Hold The Line

for(let i=0;i<10;i++){
    console.log(`Starting ${i}`);
    readFile("./Content/First.txt",'utf8',(err,result) =>{
        if(err){
            console.log(`This is the Error ${err}`);
            return
        }
        const first = result
        readFile('./Content/Second.txt','utf8',(err,result) =>{
            if(err){
                console.log(`This is the Error ${err}`);
                return
            }
            const second = result
            writeFile('./Content/result-async.txt',`This the the Asynced File ${first} , ${second}`,{flag : 'a'}, (er,res)=>{
                if(er){
                    console.log(er);
                }
                console.log(`done ${i}`);
            })
        })
    
    })
}

