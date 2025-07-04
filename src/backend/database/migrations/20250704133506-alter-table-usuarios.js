'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const table = await queryInterface.describeTable('usuarios');

    if (!table.createdAt) {
      await queryInterface.addColumn('usuarios', 'createdAt', {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('GETDATE') // ou CURRENT_TIMESTAMP
      });
    }

    if (!table.updatedAt) {
      await queryInterface.addColumn('usuarios', 'updatedAt', {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('GETDATE')
      });
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('usuarios', 'createdAt');
    await queryInterface.removeColumn('usuarios', 'updatedAt');
  }
};
