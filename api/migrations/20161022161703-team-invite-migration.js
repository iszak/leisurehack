module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'team_invite',
      {
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
          defaultValue: Sequelize.UUIDV4
        },
        teamId: {
          type: Sequelize.UUID,
          references: {
            model: 'team',
            key: 'id'
          }
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
    return queryInterface.dropTable('team_invite');
  }
};
