const http = require('http')
const server = http.createServer(handleRequest)
const fs = require('fs')

server.listen(3000)

function handleRequest(request, response) {
    const indexFile = fs.readFileSync('index.html')
    
    response.end(indexFile)
}



