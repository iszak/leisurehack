module.exports = function(sequelize, DataTypes) {
  const TeamInvite = sequelize.define(
    'team_invite',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      name: {
        type: DataTypes.STRING,
        notNull: true,
        validate: {
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
          isEmail: true,
        },
      },
      phoneNumber: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      }
    },
    {
      freezeTableName: true,
      classMethods:{
        associate: function(models) {
          TeamInvite.belongsTo(models.team, {
            as: 'Team',
            foreignKey: 'teamId',
          })
        }
      },
      validate: {
        hasEmailOrMobile: function() {
          if (!this.email && !this.mobile) {
            throw new Error('Team invite must have either email or mobile');
          }
        }
      }
    }
  );

  return TeamInvite
};
