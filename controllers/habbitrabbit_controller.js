var db = require("../models");
var express = require("express");
var router = express.Router();
var passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get("/", function(req,res){
  res.render("splash");
})

router.get("/signup", function(req,res){
  res.render("signup");
})

router.get("/login", function(req, res){
  if (req.user){
    res.render("members");
  } else {
    res.render("login");
  }
});

router.get("/members", function(req, res){
  res.render("members");
})

router.get("/survey", function(req,res){
    res.render("survey");
})

router.get("/home", function(req, res) {
      res.render("home");
});

router.get("/recipe", function(req,res){
  res.render("recipe"); 
})

router.get("/activity", function(req, res){
  res.render("activity");
})

router.get("/favactivities", function(req,res){
  res.render("favactivities");
})

router.get("/favrecipes", function(req,res){
  res.render("favrecipes");
})

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  router.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/members");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  router.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function() {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });

  // Route for logging user out
  router.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  router.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

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