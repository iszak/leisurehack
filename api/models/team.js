var Team = sequelize.define('team', {
  uuid: {
    type: Sequelize.UUID,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  sport: {
    type: Sequelize.STRING
  },
  level: {
    type: Sequelize.ENUM('Casual','Amateur')
  }
},
{
    classMethods:{
        associate:function(models){
            Team.hasMany(User);
        }
    }
}
);
