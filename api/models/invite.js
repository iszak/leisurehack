module.exports = function(sequelize, DataTypes) {
  const Invite = sequelize.define(
    'invite',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      email: {
        type: DataTypes.STRING
      },
      mobile: {
        type: DataTypes.STRING
      }
    },
    {
      classMethods:{
        associate: function(models) {
          Invite.belongsTo(models.user)
        }
      }
    }
  );

  return Invite
};
