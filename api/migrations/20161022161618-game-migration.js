module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'game',
      {
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
          defaultValue: Sequelize.UUIDV4
        },
        location: {
          type: Sequelize.STRING
        },
        type: {
          type: Sequelize.ENUM(
            '5 aside',
            '11 aside'
          )
        },
        date: {
          type: Sequelize.DATE
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
    return queryInterface.dropTable('game');
  }
};
