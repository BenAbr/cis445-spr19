const http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200);    // HTML 200 is successful connection code
                                // I.E. similar to Error 404
    response.write("<html><body><p>Hello, this is doge.</p></body></html>");
    setTimeout(function(){
        response.write("<html><body><p>Doge is tired now.</p></body></html>");
        response.end();
    }, 2000);
}).listen(8080);

console.log('Listening on port 8080...');