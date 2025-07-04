'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const table = await queryInterface.describeTable('usuarios');
    
    if (!table.telefone) {
      await queryInterface.addColumn('usuarios', 'telefone', {
        type: Sequelize.STRING,
        allowNull: true,
      });
    }

    if (!table.foto) {
      await queryInterface.addColumn('usuarios', 'foto', {
        type: Sequelize.STRING,
        allowNull: true,
      });
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('usuarios', 'telefone');
    await queryInterface.removeColumn('usuarios', 'foto');
  }
};
