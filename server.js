// Dependencies
// =============================================================
var express = require('express');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
// allows you to process complex objects from the client side
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

// Routes
// =============================================================
var apiRoutes = require("./app/routing/apiRoutes");
var htmlRoutes = require("./app/routing/htmlRoutes");
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// app.use('/api', apiRoutes);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => console.log("App listening on PORT " + PORT));