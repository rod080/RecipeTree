// module.exports = function(sequelize, DataTypes) {
//   var Recipes = sequelize.define("Recipes", {
//     text: DataTypes.STRING,
//     description: DataTypes.TEXT
//   });
//   var Users = sequelize.define("Users", {
//     userName: DataTypes.STRING,
//     password: DataTypes.STRING
//   });
//   return Recipes;
// };

module.exports = function(sequelize, DataTypes) {
  var Recipes = sequelize.define("Recipes", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    typeOf: {
      type: DataTypes.STRING,
    },
    ingredients: {
      type: DataTypes.TEXT,
      defaultValue: "None"
    },
    instructions: {
      type: DataTypes.TEXT,
    },
    comments: {
      type: DataTypes.TEXT,
    },
  });
  return Recipes;
};
