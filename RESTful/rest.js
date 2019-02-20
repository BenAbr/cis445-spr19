const express = require('express');
const app = express();

// Display all players path
app.get('/players/all', function(request, response) {
    response.writeHead(200);
    response.write('<html><body><h1>All players</h1></body></html>');
    response.end();
});

// Display a specific player path
app.get('/players/:playerid', function(request, response) {
    response.writeHead(200);
    response.write('<html><body><h1>Player specifics</h1></body></html>');
    response.end();
});

// Patch a specific player path
app.patch('/players/:playerid/update', function(request, response) {
    response.writeHead(200);
    response.write('<html><body><h1>Update a player</h1></body></html>');
    response.end();
});

// Delete a specific player path
app.delete('/players/:playerid/delete', function(request, response) {
    response.writeHead(200);
    response.write('<html><body><h1>Delete a player</h1></body></html>');
    response.end();
});

// Add a player path
app.post('/players/add', function(request, response) {
    response.writeHead(200);
    response.write('<html><body><h1>Add a player</h1></body></html>');
    response.end();
});

// Display all items path
app.get('/items/all', function(request, response) {
    response.writeHead(200);
    response.write('<html><body><h1>All items</h1></body></html>');
    response.end();
});

// Display a specific item
app.get('/items/:itemid', function(request, response) {
    response.writeHead(200);
    response.write('<html><body><h1>playerid</h1></body></html>');
    response.end();
});

// Create an item path
app.post('/items/add', function(request, response) {
    response.writeHead(200);
    response.write('<html><body><h1>Add an item/h1></body></html>');
    response.end();
});

// Delete a specific item path
app.delete('/items/:itemid/delete', function(request, response) {
    response.writeHead(200);
    response.write('<html><body><h1>Delete an item</h1></body></html>');
    response.end();
});

// Patch a specific item path
app.patch('/items/:itemid/update', function(request, response) {
    response.writeHead(200);
    response.write('<html><body><h1>Update an item</h1></body></html>');
    response.end();
});

/*
    Additional Paths
**/

// Resetting a specific player's statistics
app.patch('/players/:playerid/reset', function(request, response) {
    response.writeHead(200);
    response.write('<html><body><h1>Reset Player statistics?</h1></body></html>');
    response.end();
});



app.listen(8080, function() {
    console.log('express is up on port 8080...');
});