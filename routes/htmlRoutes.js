var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.recipe.findAll({}).then(function(dbrecipes) {
      res.render("index", {
        msg: "Welcome!",
        recipes: dbrecipes
      });
    });
  });

  // Load recipe page and pass in an recipe by id
  app.get("/recipe/:id", function(req, res) {
    db.recipe.findOne({ where: { id: req.params.id } }).then(function(dbrecipe) {
      res.render("recipe", {
        recipe: dbrecipe
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
