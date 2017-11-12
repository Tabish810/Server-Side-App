'use strict';
module.exports = (sequelize, DataTypes) => {
  var Coach_info = sequelize.define('Coach_info', {
    coach_no: DataTypes.STRING,
    coach_name: DataTypes.STRING,
    timings: DataTypes.STRING,
    destination_locations: DataTypes.STRING,
    fare: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Coach_info;
};