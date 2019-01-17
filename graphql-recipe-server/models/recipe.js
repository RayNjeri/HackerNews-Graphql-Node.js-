'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define(
    'Recipe',
    {
      title: DataTypes.STRING,
      allowNull: false
    },
    {
      ingredients: DataTypes.TEXT,
      allowNull: false
    },
    {
      direction: DataTypes.TEXT,
      allowNull: false
    },
    {}
  );
  Recipe.associate = function(models) {
    Recipe.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Recipe;
};
