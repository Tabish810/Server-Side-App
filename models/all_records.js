'use strict';
module.exports = (sequelize, DataTypes) => {
  var All_Records = sequelize.define('All_Records', {
    Name: DataTypes.STRING,
    From: DataTypes.STRING,
    To: DataTypes.STRING,
    Departure_Time: DataTypes.STRING,
    Seat_No: DataTypes.STRING,
    Fare: DataTypes.STRING,
    Advance: DataTypes.STRING,
    Remaining: DataTypes.STRING,
    Phone_No: DataTypes.STRING,
    Cnic: DataTypes.STRING,
    Date: DataTypes.STRING,
    Time: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return All_Records;
};