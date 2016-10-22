module.exports = function(sequelize, DataTypes) {
  const GameUser = sequelize.define(
    'game_user',
    {
      accepted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      classMethods: {
        associate: function(models) {
          GameUser.belongsTo(models.game);
          GameUser.belongsTo(models.user);
        }
      }
    }
  );

  return GameUser;
}
