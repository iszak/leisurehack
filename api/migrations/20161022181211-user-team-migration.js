module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'user_team',
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
        teamId: {
          type: Sequelize.UUID,
          references: {
            model: 'team',
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
    return queryInterface.dropTable('user_team');
  }
};
