'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('logins',[{
      user_name:'Sardar Tabish Zaman',
      password:'ubit'

    }],{});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('logins', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
