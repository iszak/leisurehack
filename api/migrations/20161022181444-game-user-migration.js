module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'game_user',
      {
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
          defaultValue: Sequelize.UUIDV4
        },
        userId: {
          type: Sequelize.UUID,
          references: {
            model: 'user',
            key: 'id'
          }
        },
        gameId: {
          type: Sequelize.UUID,
          references: {
            model: 'game',
            key: 'id'
          }
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
    return queryInterface.dropTable('game_user');
  }
};
