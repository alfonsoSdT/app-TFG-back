const Sequelize = require('sequelize')
const Users= require('./Users')
const DataTypes = Sequelize.DataTypes

var opts = {
    define:{
      omitNull: true,
      freezeTableName:true
    }
}
let url = 'mysql://admin:adminpassword@localhost:3306/mydb'
var sequelize = new Sequelize(url,opts);

/*
const testConn = async() =>{
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


}
testConn()
*/
let user = Users(sequelize,DataTypes)

exports.user = user;