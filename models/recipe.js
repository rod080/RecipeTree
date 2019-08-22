

module.exports = function(sequelize, DataTypes) {
  var Recipe = sequelize.define("Recipe", {
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
    price:{
    type: DataTypes.INTEGER,
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
  return Recipe;
};
