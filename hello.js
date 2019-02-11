const express = require('express');
const app = express();

/*
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
*/
app.get('/', function(request, response) {
    response.writeHead(200);
    response.write('<html><body><h1>Please specify an animal in the path</h1></body></html>');
    response.end();
});

app.get('/cat', function(request, response) {
    response.writeHead(200);
    response.write('<html><body><h1>You have been visited by the cat of destiny.</h1></body></html>');
    response.end();
});

app.get('/dog', function(request, response) {
    response.writeHead(200);
    response.write('<html><body><h1>You have been visited by the dog of wisdom.</h1></body></html>');
    response.end();
});

app.delete('/:animal', function(request, response) {
    response.writeHead(200);
    response.write('<html><body><h1>You have been visited by the [REDACTED] of desolation.</h1></body></html>');
    response.end();
}).get('/:animal', function(request, response) {
    response.writeHead(200);
    response.write('<html><body><h1>You have been visited by the [REDACTED] of redemption.</h1></body></html>');
    response.end();
});

app.listen(8080, function() {
    console.log('express is up on port 8080...');
});