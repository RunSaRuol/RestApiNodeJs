// Define Dependences
const express = require('express');
const bodyParser = require('body-parser');


// Content
const app = express();

/** set up bodyparser */
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//Module Exports
module.exports = app; 