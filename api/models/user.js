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
        },
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          isIn: [
            'male',
            'female'
          ],
        },
      },
      age: {
        type: DataTypes.FLOAT,
        validate: {
          notEmpty: true,
          isNumeric: true,
        },
      },
      weight: {
        type: DataTypes.FLOAT,
        validate: {
          notEmpty: true,
          isNumeric: true,
        },
      },
      sport: {
        type: DataTypes.STRING,
        notNull: true,
        validate: {
          notEmpty: true,
          isIn: [
            'Football',
            'Hockey'
          ],
        },
      },
      position: {
        type: DataTypes.ENUM(
          'Left back',
          'Right back',
          'Center back',
          'Left mid',
          'Center mid',
          'Right mid',
          'Striker',
          'Goalkeeper'
        ),
        notNull: true,
        validate: {
          notEmpty: true,
          isIn: [
            'Left back',
            'Right back',
            'Center back',
            'Left mid',
            'Center mid',
            'Right mid',
            'Striker',
            'Goalkeeper'
          ],
        },
      },
      availability: {
        type: DataTypes.ARRAY(DataTypes.TEXT)
      }
    },
    {
      freezeTableName: true,
      classMethods:{
        associate: function(models) {
          User.belongsToMany(models.team, {
            through: models.user_team
          })
          User.belongsToMany(models.game, {
            through: models.game_user
          })
        }
      }
    }
  );

  return User;
};
