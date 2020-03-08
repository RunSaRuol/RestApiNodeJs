//Define Dependences
const http = require('http');
const app = require('./app');

//Define Port
const port = http.env.PORT || 3000

//Create server
const server= http.createServer(app);

//listen a port
server.listen(port);

/**
 * Note : This app want run command npn start
 * 
 */