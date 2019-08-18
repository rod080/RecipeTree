var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/recipes", function(req, res) {
    db.recipes.findAll({}).then(function(dbrecipes) {
      res.json(dbrecipes);
    });
  });

  // Create a new recipe
  app.post("/api/recipes", function(req, res) {
    db.recipes.create(req.body).then(function(dbrecipes) {
      res.json(dbrecipes);
    });
  });

  // Delete an recipe by id
  app.delete("/api/recipes/:id", function(req, res) {
    db.recipes.destroy({ where: { id: req.params.id } }).then(function(dbrecipes) {
      res.json(dbrecipes);
    });
  });
};
