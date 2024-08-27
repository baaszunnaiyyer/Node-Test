const os = require('os')

// info about current user

const user = os.userInfo()
console.log(user)

// Method Returens the system uptime in Seconds

console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name:os.type(),
    relese:os.release(),
    freeMemory:os.freemem(),
    totalMemory:os.totalmem()
}

console.log(currentOS)