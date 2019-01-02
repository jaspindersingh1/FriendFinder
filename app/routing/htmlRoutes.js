// Routes for HTML pages
// =============================================================

// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var htmlRoutes = express.Router();
// var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
htmlRoutes.use(express.urlencoded({ extended: true }));
htmlRoutes.use(express.json());

// Basic route that sends the user first to the AJAX Page
htmlRoutes.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});
  
htmlRoutes.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

// Starts the server to begin listening
// =============================================================
// htmlRoutes.listen(PORT, () => {
//     console.log("App listening on PORT " + PORT);
// });

module.export = htmlRoutes