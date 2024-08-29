const EventEmitter = require('events')

const customEmmiter = new EventEmitter()

customEmmiter.on('response', (name,id)=>{
    console.log(`Data recived name is ${name} and id is ${id}`)
})

customEmmiter.on('response', ()=>{
    console.log('asdasdasd asdasdasd')
})


customEmmiter.emit('response','john',32)