const express = require('express');
const path = require('path'); // https://nodejs.org/api/path.html
const parser = require('body-parser'); //https://github.com/expressjs/body-parser
const helmet = require('helmet'); // a react component that manages all changes to document head 

const server = express();
const port = 3000;

const routes = require('./routes.js');

const customLogger = (req, res, next) => {
    console.log('Serving req type', req.method, 'to path', req.path);
    next();
};

server.use(helmet()); //.use binds some middleware to the express app
server.use(parser.json());

server.use(parser.urlencoded({ extended: false}));

server.use(customLogger);

server.use(express.static(path.join(__dirname, '../client/dist')));
//express.static attaches static files (images, CDD files, JS files) to express app

server.use('/api', routes);

server.listen(port, () => console.log(`Server listening on port ${port}`))
//.listen listens for connections on the given path (port in this case)