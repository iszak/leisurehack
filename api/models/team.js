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
        type: DataTypes.STRING
      },
      sport: {
        type: DataTypes.STRING
      },
      level: {
        type: DataTypes.ENUM(
          'Casual',
          'Amateur'
        )
      }
    },
    {
      classMethods:{
        associate: function(models) {
          Team.hasMany(models.user);
        }
      }
    }
  );

  return Team
}
