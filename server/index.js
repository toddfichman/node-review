//Import node's http module
const http = require("http");

//Once we create a request, handler we'll need to import it here
//to pass into our createserver
const requestHandler = require("./handler.js");

//Every server needs to listen on a port with a unique number
const port = 3000;

//Since we're running the server on our local machine, we can have it
//listen to this IP address which refers to the local host
const ip = "127.0.0.1";

//We'll use node's http module to create a server
//The function that we pass into http.createServer will be used to
//handle all incoming requests
const server = http.createServer(requestHandler);


//After creating the server, we'll tell it to listen to the port and IP
//server.listen() will continue to run as long as there is a possibility
//to server more requests. So to stop your server, you must do Ctrl-C
//in the command line
server.listen(port);
console.log("Listening on port", port);
