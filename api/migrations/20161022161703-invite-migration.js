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
        }
      }
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('invite');
  }
};
