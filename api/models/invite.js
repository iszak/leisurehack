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
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      mobile: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      }
    },
    {
      freezeTableName: true,
      classMethods:{
        associate: function(models) {
          Invite.belongsTo(models.user)
        }
      }
    }
  );

  return Invite
};
