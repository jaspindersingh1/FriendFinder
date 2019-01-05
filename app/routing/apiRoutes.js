// Routes for API pages
// =============================================================

// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var apiRoutes = express.Router();
// var PORT = process.env.PORT || 8080;

// Sets up the Express apiRoutes to handle data parsing
apiRoutes.use(express.urlencoded({ extended: true }));
apiRoutes.use(express.json());

// Data Storage
var userData = [
    {
        name: "",
        photo: "",
        scores: []
    },
];

// Basic route that sends the user first to the AJAX Page
apiRoutes.get("/api/friends", function(req, res) {
    // return res.json(userData);
    res.sendFile(path.join(__dirname, "../data/friends.js"))
});
  
apiRoutes.post("/api/friends", function(req, res){

  var newuserData = req.body;

  // Using a RegEx Pattern to remove spaces from newuserData
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newuserData.routeName = newuserData.customerName.replace(/\s+/g, "").toLowerCase();

  console.log(newuserData);

  userData.push(newuserData);

  res.json(newuserData);
});

// Starts the server to begin listening
// =============================================================
// apiRoutes.listen(PORT, () => {
//     console.log("App listening on PORT " + PORT);
// });

module.export = apiRoutes;