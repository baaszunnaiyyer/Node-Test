const {readFile, writeFile} = require('fs').promises

// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async ()=>{
    
    try{
        const first = await readFile('./Content/first.txt', 'utf8')
        const second = await readFile('./Content/Second.txt', 'utf8')
        await writeFile('./Content/hehehe.txt', `Hello This will be My last Thing HAHAHA \n ${first} \n ${second}`)
        console.log(first, second);
    }catch(err){
        console.log(err);
    }
}

start()
    
    // const getText = (path) =>{
    //     return new Promise((resolve, reject) =>{
    //         readFile(path, 'utf8', (err,data)=>{
    //             if(err){
    //                 reject(err)
    //             }else{
    //                 resolve(data)
    //             }
    //         })
    //     })
    // }
    
    // getText('./Content/first.txt').then((result) => console.log(result)).catch((err) => console.log(err))