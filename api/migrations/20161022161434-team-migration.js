module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'team',
      {
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
          defaultValue: Sequelize.UUIDV4
        },
        name: {
          type: Sequelize.STRING,
        },
        sport: {
          type: Sequelize.STRING,
        },
        level: {
          type: Sequelize.ENUM(
            'Casual',
            'Amateur'
          )
        }
      }
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('team');
  }
};
