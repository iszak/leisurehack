module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
          notEmpty: true
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        },
      },
    },
    {
      freezeTableName: true,
      classMethods:{
        associate: function(models) {
          User.belongsToMany(models.team, {
            through: models.user_team,
            as: 'Teams',
          })
          User.belongsToMany(models.game, {
            through: models.game_user,
            as: 'Games',
          })
        }
      }
    }
  );

  return User;
};
