const http = require('http');

const routes = require('./routes'); 

// Listener: A function that will execute for every incoming request

// On both requests and responses, Http headers are added to transport metadata from A to B.

const server = http.createServer(routes);
    // Look for this function, with this name and execute it for every incoming request   

server.listen(3000);