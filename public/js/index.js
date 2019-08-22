// Get references to page elements
var $recipeName = $("#recipe-name");
var $recipePicture = $("#recipe-picture");
var $recipeTypeOf = $("#recipe-typeof");
var $recipeIngredients = $("#recipe-ingredients");
var $recipeInstructions = $("#recipe-instructions");
var $recipeComments = $("#recipe-comments");
var $price = $("#recipe-price")
var $submit = $("#submit");
var $recipeList = $("#recipe-list");

 
console.log("hello")

// The API object contains methods for each kind of request we'll make
var API = {
  saveRecipe: function(recipe) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/api/recipes",
      data: JSON.stringify(recipe)
    });
  },
  getRecipes: function() {
    return $.ajax({
      url: "api/recipes",
      type: "GET"
    });
  },
  deleteRecipe: function(id) {
    return $.ajax({
      url: "api/recipes/" + id,
      type: "DELETE"
    });
  }
};


// refreshrecipes gets new recipes from the db and repopulates the list
var refreshRecipes = function() {
  API.getRecipes().then(function(data) {
    var $recipes = data.map(function(recipe) {
      var $a = $("<a>")
        .text(recipe.name)
        .attr("href", "/recipe/" + recipe.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": recipe.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $recipeList.empty();
    $recipeList.append($recipes);
  });
};

// handleFormSubmit is called whenever we submit a new recipe
// Save the new recipe to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var recipe = {
    name: $recipeName.val().trim(),
    picture: $picURL,
    typeOf: $recipeTypeOf.val().trim(),
    price: $price.val().trim(),
    ingredients: $recipeIngredients.val().trim(),
    instructions: $recipeInstructions.val().trim(),
    comments: $recipeComments.val().trim(),
  };

  if (!(recipe.name && recipe.ingredients)) {
    alert("You must enter an recipe text and description!");
    return;
  }

  API.saveRecipe(recipe).then(function() {
    refreshRecipes();
  });

  $recipeName.val("");
  $recipePicture.val("");
  $recipeTypeOf.val("");
  $price.val("");
  $recipeIngredients.val("");
  $recipeInstructions.val("");
  $recipeComments.val("");
};

// handleDeleteBtnClick is called when an recipe's delete button is clicked
// Remove the recipe from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteRecipe(idToDelete).then(function() {
    refreshRecipes();
  });
};

// Add event listeners to the submit and delete buttons
$submit.on("click", handleFormSubmit);
$submit.on("click", function() {
  console.log("clicked")
  location.href = "/";

});
$recipeList.on("click", ".delete", handleDeleteBtnClick);




// ol id="books">
// </ol>​

// // This looks much nicer a separate call for each array member
// var books = [
//    "Fifty Shades of Grey",
//    "Twilight",
//    "The Notebook"
// ];

// var html = "";
// for (var i =0; i < books.length; i++) {
//     html += "<li>" + books[i]+ "</li>";
// }
// document.getElementById("books").innerHTML = html;​


