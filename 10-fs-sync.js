const {readFileSync,writeFileSync} = require('fs')


// These LOGS for Start and done and starting again are done Just For Understanding of how the tasks will be handeled
// Sync 

console.log('Start');

const first = readFileSync('./Content/first.txt', 'utf8')
console.log(first);

const second = readFileSync('./Content/Second.txt', 'utf8')
console.log(second);


writeFileSync('./Content/result-file.txt', `This is the Resulted File ${first}, ${second}`, {flag : "a"})

console.log('done');
console.log('Starting again');
