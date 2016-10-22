module.exports = function(sequelize, DataTypes) {
  const Game = sequelize.define(
    'game',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      location: {
        type: DataTypes.STRING
      },
      type: {
        type: DataTypes.ENUM(
          '5 aside',
          '11 aside'
        )
      },
      date: {
        type: DataTypes.DATE
      },
    },
    {
      classMethods: {
        associate: function(models) {
          Game.hasMany(models.user);
        }
      }
    }
  );

  return Game;
}
