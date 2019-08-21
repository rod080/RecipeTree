var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Recipe.findAll({}).then(function(dbrecipes) {
      res.render("index", {
        msg: "Welcome!",
        recipes: dbrecipes
      });
    });
  });
  // Load recipe page and pass in an recipe by id
  app.get("/recipes/:id", function(req, res) { 
    db.Recipe.findOne({ where: {id: req.params.id} }).then(function(dbrecipes) {
      res.render("recipes", {
        recipes: dbrecipes
      });
    });
  });
  app.get("/recipes", function (req,res) {
res.render("recipes");
  });
  app.get("/addRecipe", function(req,res){
    res.render("addRecipe");
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
