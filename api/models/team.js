module.exports = function(sequelize, DataTypes) {
  const Team = sequelize.define(
    'team',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          min: 1,
          max: 255,
        }
      },
      sport: {
        type: DataTypes.ENUM(
          'Football',
          'Hockey'
        ),
        allowNull: false,
        validate: {
          notEmpty: true,
          min: 1,
          max: 255,
          isIn: [
            'Football',
            'Hockey',
          ]
        }
      },
      level: {
        type: DataTypes.ENUM(
          'Casual',
          'Amateur'
        ),
        allowNull: false,
        validate: {
          notEmpty: true,
          min: 1,
          max: 255,
          isIn: [
            'Casual',
            'Amateur'
          ]
        }
      }
    },
    {
      freezeTableName: true,
      classMethods:{
        associate: function(models) {
          Team.hasMany(models.user);
        }
      }
    }
  );

  return Team
}
