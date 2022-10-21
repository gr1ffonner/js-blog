const http = require('http')
const server = http.createServer(handleRequest)
const fs = require('fs')



server.listen(3000)

function handleRequest(request, response) {
    let url = request.url
    if (url == '/') url = '/index.html'
    const file = fs.readFileSync('.' + url)
    if (url.endsWith('.ico')) response.setHeader('content-type', "image/x-icon")
    response.end(file)
}

