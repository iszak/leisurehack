var User = sequelize.define('user', {
  uuid: {
    type: Sequelize.UUID,
    primaryKey: true
  },
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  gender: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.FLOAT
  },
  weight: {
    type: Sequelize.FLOAT
  },
  sport: {
    type: Sequelize.STRING
  },
  position: {
    type: Sequelize.ENUM('Left back','Right back','Center back','Left mid','Center mid','Right mid','Striker','Goalkeeper')
  },
  availability: {
    type: Sequelize.ARRAY(Sequelize.TEXT)
  }
},
{
    classMethods:{
        associate:function(models){
            User.hasMany(Invite);
            User.belongsToMany(Team);
        }
    }
}
);
