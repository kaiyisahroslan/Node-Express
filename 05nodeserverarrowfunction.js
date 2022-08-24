// Import http package from node runtime
let httpRef = require('http');

// server has to deal with request and response as parameter
// request is incoming
// response is outgoing

// Use httpRef to create a server
// Use createServer to create the new http server
// createServer will use ghost/anynomous arrow callback function 
// to implement the server

let myFirstServer = httpRef.createServer((request, response) => {
    // console.log(request);
    console.log('Request received');
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write('<h1>Hello from node server. My very first server!</h1>');
    response.write('<h2>i can send multiple responses ONLY before end!!</h2>');
    response.write('<h2>I am ghost/anonymous arrow function</h2>');
    // List of items
    response.write(`
    <ol>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
    </ol>`); 
    // Insert video
    // response.write(`<iframe width="560" height="315" src="https://www.youtube.com/embed/PRufXhb9yDo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    console.log('Response being sent');
    response.end();
})

const PORT = 4000;
// Configure the port for the server to listen to the request
myFirstServer.listen(PORT);