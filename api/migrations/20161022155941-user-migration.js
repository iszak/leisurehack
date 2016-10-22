module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'user',
      {
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
          defaultValue: Sequelize.UUIDV4
        },
        firstName: {
          type: Sequelize.STRING
        },
        lastName: {
          type: Sequelize.STRING
        },
        gender: {
          type: Sequelize.STRING
        },
        age: {
          type: Sequelize.FLOAT
        },
        weight: {
          type: Sequelize.FLOAT
        },
        sport: {
          type: Sequelize.STRING
        },
        position: {
          type: Sequelize.ENUM(
            'Left back',
            'Right back',
            'Center back',
            'Left mid',
            'Center mid',
            'Right mid',
            'Striker',
            'Goalkeeper'
          )
        },
        availability: {
          type: Sequelize.ARRAY(Sequelize.TEXT)
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
    return queryInterface.dropTable('user');
  }
};
