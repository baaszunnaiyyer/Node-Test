const {readfile} = require('fs')

console.log('started a first Task')
// Check File path

readfile('./Content/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result);
    console.log('Completed first Task');

})

console.log('Starting next task');