const http = require('http');

let message = "Here's looking at you, kid.";
let options = {
    host: 'www.una.edu', port: 80, path: '/', method: 'POST'
}

const request = http.request(options, function(response) {
    response.on('data', function(data) {
        console.log(data);
    });
});

request.write(message);
request.end();