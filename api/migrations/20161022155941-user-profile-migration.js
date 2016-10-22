module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'user_profile',
      {
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
          defaultValue: Sequelize.UUIDV4
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
          type: Sequelize.STRING,
          allowNull: false,
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
          ),
          allowNull: false,
        },
        availability: {
          type: Sequelize.ARRAY(Sequelize.TEXT),
          allowNull: false,
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
    return queryInterface.dropTable('user_profile');
  }
};
