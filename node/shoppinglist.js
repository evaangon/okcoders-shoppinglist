// Main file of our shopping list
var express = require('express'); // Import the express module

var app = express();             // Create our app object that holds our routes

app.listen(3000, function(err) { // start
  console.log('shoppinglist listening on http://localhost:3000');

});

app.use( '/', express.static('../app')); //serve

app.get('/list',function(req,res){
  res.json([
    "cat food",
    "toys",
    "snacks",
  ]);
});
