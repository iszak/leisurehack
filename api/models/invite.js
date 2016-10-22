var Invite = sequelize.define('invite', {
  uuid: {
    type: Sequelize.UUID,
    primaryKey: true
  },
  email: {
    type: Sequelize.STRING
  },
  mobile: {
    type: Sequelize.STRING
  }
},
{
    classMethods:{
        associate:function(models){
            Invite.belongsTo(User);
        }
    }
}
);
