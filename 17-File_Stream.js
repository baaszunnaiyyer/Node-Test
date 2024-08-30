const {createReadStream}= require('fs');

const stream = createReadStream('./Content/big.txt',{highWaterMark:9000, encoding:'utf8'})


// default size 64kb
//last buffer - reminder 
// highWatermark - control Size
// 

stream.on('data',(result)=>{
    console.log(result);
})

stream.on('error',(err)=>{
    console.log(err);
})