// // Dependencies
// // =============================================================
// var express = require('express');
// var path = require('path');

// // Sets up the Express App
// // =============================================================
// var app = express();
// var PORT = process.env.PORT || 7000;

// // Sets up the Express app to handle data parsing
// // allows you to process complex objects from the client side
// app.use(express.urlencoded({ extended: true })); 
// app.use(express.json());

// // Routes
// // =============================================================
// var htmlRoutes = require("./app/routing/htmlRoutes");
// var apiRoutes = require("./app/routing/apiRoutes");
// app.use('/', function(req, res) {
//     htmlRoutes;
// });
// app.use('/api', function(req, res){
//     apiRoutes;
// });

// // console.log(htmlRoutes)
// // console.log(apiRoutes)
// // Starts the server to begin listening
// // =============================================================
// app.listen(PORT, () => console.log("App listening on PORT " + PORT));