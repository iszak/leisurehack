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
          allowNull: false,
        },
        sport: {
          type: Sequelize.ENUM(
            'Football',
            'Hockey'
          ),
          allowNull: false,
        },
        level: {
          allowNull: false,
          type: Sequelize.ENUM(
            'Casual',
            'Amateur'
          )
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
    return queryInterface.dropTable('team');
  }
};
