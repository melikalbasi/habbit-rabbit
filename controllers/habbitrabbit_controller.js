var express = require("express");

var router = express.Router();

// Import the model (recipe.js) to use its database functions.
var recipe = require("../models/recipe.js");
var activity = require("../models/activity.js");
var survey = require("../public/assets/js/survey.js")
var db = require("../models");

router.get("/home", function(req, res) {
      res.render("home");
});

router.get("/survey", function(req,res){
    res.render("survey");
})

// router.post("/api/recipe", function(req, res) {
// db.Recipe.create({
//   recipe_name: req.body.recipe_name
// }).then(function(result) {
//     res.json({ id: result.insertId });
//   });
// });

// router.put("/api/recipe/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   db.Recipe.update({
//     starred: req.body.starred
//   }, {where: {id:req.params.id}}).then(function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });


// router.get("/", function(req, res) {
//     db.Activity.findAll().then(function(data) {
//       var hbsObject = {
//         activities: data
//       };
//       console.log(hbsObject);
//       res.render("index", hbsObject);
//     });
//   });
  
//   router.post("/api/activity", function(req, res) {
//   db.Activity.create({
//     activity: req.body.activity_name
//   }).then(function(result) {
//       res.json({ id: result.insertId });
//     });
//   });
  
//   router.put("/api/activity/:id", function(req, res) {
//     var condition = "id = " + req.params.id;
  
//     console.log("condition", condition);
  
//     db.Activity.update({
//       starred: req.body.starred
//     }, {where: {id:req.params.id}}).then(function(result) {
//       if (result.changedRows == 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       } else {
//         res.status(200).end();
//       }
//     });
//   });


// Export routes for server.js to use.
module.exports = router;