module.exports = function(sequelize, DataTypes) {
  const UserTeam = sequelize.define(
    'user_team',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      }
    },
    {
      freezeTableName: true,
      classMethods:{
        associate: function(models) {
          UserTeam.belongsTo(models.user);
          UserTeam.belongsTo(models.team);
        }
      }
    }
  );

  return UserTeam;
};
