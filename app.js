// Define Dependences
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose =require('mongoose');

// Content
const app = express();

//import file routes config ./app
const projects = require('./app/routes/project.route');

//connect DB
mongoose.connect('mongodb+srv://admin:' +
process.env.MONGO_ATLAS_PW +
'@restapi-ladji.mongodb.net/test?retryWrites=true&w=majority',
{
    useNewUrlParser : true,
}

);

//middleware
/**
 * set up morgan
 */
app.use(logger('dev'));
/** set up bodyparser */
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Routes
app.use('/projects',projects);
// app.get('/',(req,res,next)=> {
//     res.status(200).json({
//         message: 'You requested homapage'

//     });
// });
// Catch 404 Errors and  forward them to error handler
app.use((req,res,next)=>{
   const error = new Error('Not Found');
   error.status =404;
   next(error);
});

//error handler function
app.use(()=>{
    const error =app.get('env') === 'development' ? error :{};
    const status=error.status || 500;
    res.status(status).json({
        error: {
            message: error.message
        }
    });

});

//Module Exports
module.exports = app; 