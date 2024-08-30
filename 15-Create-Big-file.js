const {writeFileSync} = require('fs')

for (var i = 0; i<10000; i++){
    writeFileSync('./Content/big.txt', `THis is the big file ${i}`, {flag:"a"})
}