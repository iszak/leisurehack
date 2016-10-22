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
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          min: 1,
          max: 255,
        }
      },
      type: {
        type: DataTypes.ENUM(
          '5 aside',
          '11 aside'
        ),
        allowNull: false,
        validate: {
          notEmpty: true,
          isIn: [
            '5 aside',
            '11 aside',
          ]
        }
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      classMethods: {
        associate: function(models) {
          Game.hasMany(models.user);
        }
      }
    }
  );

  return Game;
}
