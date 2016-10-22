module.exports = function(sequelize, DataTypes) {
  const UserProfile = sequelize.define(
    'user_profile',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
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
          UserProfile.belongsTo(models.user)
        }
      }
    }
  );

  return UserProfile;
};
