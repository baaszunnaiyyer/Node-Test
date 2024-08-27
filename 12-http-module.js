const http = require('http')

const server = http.createServer((req,res) =>{
    switch(req.url){
        case '/':
            res.end('Welcome to our Home Page')
            break
        case '/about':
            res.end('This is about page')
            break
        default:
            res.end(
                `<h1>Opps</h1>
                <p>This page Is not Found 404 Error</p>
                <a href='/'>back Home</a>
            `)

    }
    
})

server.listen(5000)