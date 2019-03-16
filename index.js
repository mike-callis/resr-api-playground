const express = require('express');
const bodyParser = require('body-parser');


// setuo express app
const app = express();

// initialise body parser
app.use(bodyParser.json());

// initialise routes
app.use('/api', require('./routes/api'));

// listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
});