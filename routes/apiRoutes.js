var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/recipes", function(req, res) {
    db.recipe.findAll({}).then(function(dbrecipes) {
      res.json(dbrecipes);
    });
  });

  // Create a new recipe
  app.post("/api/recipes", function(req, res) {
    db.recipe.create(req.body).then(function(dbrecipe) {
      res.json(dbrecipe);
    });
  });

  // Delete an recipe by id
  app.delete("/api/recipes/:id", function(req, res) {
    db.recipe.destroy({ where: { id: req.params.id } }).then(function(dbrecipe) {
      res.json(dbrecipe);
    });
  });
};
