'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('usuarios', 'telefone', {
      type: Sequelize.STRING,
      allowNull: true
    });

    await queryInterface.addColumn('usuarios', 'foto', {
      type: Sequelize.STRING,
      allowNull: true
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('usuarios', 'telefone');
    await queryInterface.removeColumn('usuarios', 'foto');
  }
};
