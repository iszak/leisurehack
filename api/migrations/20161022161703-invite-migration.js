module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'invite',
      {
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
          defaultValue: Sequelize.UUIDV4
        },
        email: {
          type: Sequelize.STRING
        },
        mobile: {
          type: Sequelize.STRING
        },
        createdAt: {
          type: Sequelize.DATE
        },
        updatedAt: {
          type: Sequelize.DATE
        }
      }
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('invite');
  }
};