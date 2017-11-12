'use strict';
module.exports = (sequelize, DataTypes) => {
  var Login = sequelize.define('Login', {
    user_name: DataTypes.STRING,
    password: DataTypes.STRING,
    commission: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Login;
};