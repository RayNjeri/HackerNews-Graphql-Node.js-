'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      allowNull: false
    },
    {
      email: DataTypes.STRING,
      allowNull: false
    },
    {
      password: DataTypes.STRING,
      allowNull: false
    },

    {}
  );
  User.associate = function(models) {
    User.hasMany(models.Recipe);
  };
  return User;
};
