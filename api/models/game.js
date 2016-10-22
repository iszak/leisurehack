var Game = sequelize.define('game', {
  uuid: {
    type: Sequelize.UUID,
    primaryKey: true
  },
  location: {
    type: Sequelize.STRING
  },
  type: {
    type: Sequelize.ENUM('5x5','11x11')
  },
  date: {
    type: Sequelize.DATE
  },
},
{
    classMethods:{
        associate:function(models){
            Game.hasMany(User);
        }
    }
}
);
