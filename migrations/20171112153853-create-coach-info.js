'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Coach_infos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      coach_no: {
        type: Sequelize.STRING
      },
      coach_name: {
        type: Sequelize.STRING
      },
      timings: {
        type: Sequelize.STRING
      },
      destination_locations: {
        type: Sequelize.STRING
      },
      fare: {
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
    return queryInterface.dropTable('Coach_infos');
  }
};