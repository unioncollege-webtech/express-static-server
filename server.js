// Require the Express module
// https://npmjs.com/package/express
var express = require('express');

// Create a new application instance
var app = express();

// Use Express's built-in static file server
app.use(express.static('public'));

var counter = 0;
// Also respond to `GET` requests at the path '/hi'
app.get('/hi', function(req, res){
    counter++;
   res.send('Hello from Samuel ' + counter + "times"); 
});

app.get('/bye', function (req, res){
    counter--;
    res.send('Good bye from Samuel ' + counter + 'times');
});

function counter() {
    
};
//add retrieve() and record()

// Listen on port 8080 for Cloud9
// https://docs.c9.io/docs/run-an-application#section-environment-variables
app.listen(8080);

// Log a message to the console.
console.log("Server is up!");