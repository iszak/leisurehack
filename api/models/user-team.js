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
          UserTeam.belongsTo(models.user, {
            as: 'User',
            foreignKey: 'userId',
          });
          UserTeam.belongsTo(models.team, {
            as: 'Team',
            foreignKey: 'teamId',
          });
        }
      }
    }
  );

  return UserTeam;
};
