'use strict';
module.exports = (sequelize, DataTypes) => {
  var Drivers_record = sequelize.define('Drivers_record', {
    driver_names: DataTypes.STRING,
    coach_Names: DataTypes.STRING,
    cnic: DataTypes.STRING,
    phone_no: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Drivers_record;
};