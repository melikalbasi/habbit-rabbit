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
  console.log(req.user);
  if (req.user){
    res.render("members");
  } else {
    res.render("login");
  }
});

router.get("/members", function(req, res){
  res.render("members");
})

router.get("/home", function(req, res) {
      res.render("home");
});


router.get("/recipe/:category", function(req,res){
  console.log(req.params.category);
  db.Recipe.findAll({where: {category: req.params.category}}).then(function(recipes){
    var recipeHolder = []
    for (var i = 0 ; i < recipes.length; i++) {
      recipeHolder.push(recipes[i].dataValues)
    }
    console.log("=======\n", recipeHolder)
    var hbsObj = {
      recipes: recipeHolder
    }  
    res.render("recipe", hbsObj); 
    
  })
 
})

router.get("/activity", function(req, res){
  var isOlder = false;
  if (req.user.age >= 65) {
    isOlder = true;

  }
    db.Activity.findAll({where:{ below65: isOlder}}).then(function(activities) {
      // var activityHolder = [];
      // for (var i=0; i < activities.length; i++) {
        // activityHolder.push(activities[i].dataValues)
      // }
      var hbsObject = {
        activities: activities
      }
      res.render("activity", hbsObject);
    })
})

router.get("/favactivities", function(req,res){
  res.render("favactivities");
})

router.get("/favrecipes", function(req,res){
  res.render("favrecipes");
})

router.get("/userprofile", function(req, res) {
  var hbsObject = {
    user: req.user
  }
    res.render("survey", hbsObject);
})



  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  router.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed

    res.json("/home");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  router.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      name: req.body.name,
      age: req.body.age,
      diet: req.body.diet,
      email: req.body.email,
      password: req.body.password
    }).then(function() {
      return res.redirect("/login");
    }).catch(function(err) {
      
      console.log(err);
      // res.json(err);
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
router.get("/recipe", function(req,res){
 db.Recipe.findAll({where:{ category: req.user.diet}}).then(function(recipes){
   var recipeHolder = []
   for (var i = 0 ; i < recipes.length; i++) {
     recipeHolder.push(recipes[i].dataValues)
   }
   console.log("=======\n", recipeHolder)
   var hbsObj = {
     recipes: recipeHolder
   }
   res.render("recipe", hbsObj);

   console.log("helllooooooooo" + req.user.diet);


 })

})
// Export routes for server.js to use.
module.exports = router;