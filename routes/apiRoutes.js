var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/recipes", function(req, res) {
    db.Recipe.findAll({}).then(function(dbrecipes) {
      res.json(dbrecipes);
    });
  });

  // Create a new recipe
  app.post("/api/recipes", function(req, res) { console.log(req.body)
    db.Recipe.create(req.body).then(function(dbRecipe) {
      res.json(dbRecipe);
    });
  });

  // Delete an recipe by id
  app.delete("/api/recipes/:id", function(req, res) {
    db.Recipe.destroy({ where: { id: req.params.id } }).then(function(dbRecipe) {
      res.json(dbRecipe);
    });
  });
};
