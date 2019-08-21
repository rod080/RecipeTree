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


app.post("/api/todos", function(req, res) {
  // create takes an argument of an object describing the item we want to
  // insert into our table. In this case we just we pass in an object with a text
  // and complete property
  db.Todo.create({
    text: req.body.text,
    complete: req.body.complete
  }).then(function(dbTodo) {
    // We have access to the new todo as an argument inside of the callback function
    res.json(dbTodo);
  });
});