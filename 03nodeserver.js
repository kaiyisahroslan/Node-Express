// Import http package from node runtime
let httpRef = require('http');

// server has to deal with request and response as parameter
// request is incoming
// response is outgoing
const myCallBackFunction = (request, response) => {
    console.log('Request received');
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write('<h1>Hello from node server. My very first server!</h1>');
    response.write('<h2>i can send multiple responses ONLY before end!!!!</h2>');
    console.log('Response being sent');
    response.end();
}

// Use httpRef to create a server
// Use createServer to create the new http server
// createServer will use custom function called callBackFunction
// to implement the server

// myCallBackFunction is a functionS
let myFirstServer = httpRef.createServer(myCallBackFunction);

const PORT = 4000;
// Configure the port for the server to listen to the request
myFirstServer.listen(PORT);