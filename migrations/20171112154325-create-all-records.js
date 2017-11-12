'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('All_Records', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        type: Sequelize.STRING
      },
      From: {
        type: Sequelize.STRING
      },
      To: {
        type: Sequelize.STRING
      },
      Departure_Time: {
        type: Sequelize.STRING
      },
      Seat_No: {
        type: Sequelize.STRING
      },
      Fare: {
        type: Sequelize.STRING
      },
      Advance: {
        type: Sequelize.STRING
      },
      Remaining: {
        type: Sequelize.STRING
      },
      Phone_No: {
        type: Sequelize.STRING
      },
      Cnic: {
        type: Sequelize.STRING
      },
      Date: {
        type: Sequelize.STRING
      },
      Time: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('All_Records');
  }
};