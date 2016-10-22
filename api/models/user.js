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
        type: DataTypes.STRING
      },
      lastName: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      gender: {
        type: DataTypes.STRING
      },
      age: {
        type: DataTypes.FLOAT
      },
      weight: {
        type: DataTypes.FLOAT
      },
      sport: {
        type: DataTypes.STRING
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
        )
      },
      availability: {
        type: DataTypes.ARRAY(DataTypes.TEXT)
      }
    },
    {
      classMethods:{
        associate: function(models) {
          User.hasMany(models.invite);
          User.belongsTo(models.team);
        }
      }
    }
  );

  return User;
};
