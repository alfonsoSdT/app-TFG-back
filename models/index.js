const Sequelize = require('sequelize')

const Users= require('./Users')
const Courses= require('./Courses')
const DataCourses= require('./DataCourses')
const StatusCourse = require('./StatusCourse')
const StatusUser = require('./StatusUser')
const { ForeignKeyConstraintError } = require('sequelize')

const DataTypes = Sequelize.DataTypes

var opts = {
    define:{
      omitNull: true,
      freezeTableName:true
    }
}
let url = 'mysql://admin:adminpassword@localhost:3306/mydb'
var sequelize = new Sequelize(url,opts);


let user = Users(sequelize,DataTypes)
let course = Courses(sequelize,DataTypes)
let datacourse = DataCourses(sequelize,DataTypes)
let statusCourse = StatusCourse(sequelize,DataTypes)
let statusUser = StatusUser(sequelize,DataTypes)


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

/*--------Relations-------*/
/*User N->1 statusUser 
statusUser.hasMany(user, {
  foreignKey: 'idUser'
});
user.belongsTo(statusUser);
*/
/*User 1->1 statusUser 
user.hasOne(statusUser, {
  foreignKey: 'idStatusUser'
});
statusUser.belongsTo(user);
*/

/* User 1->N DataCourse*/

datacourse.hasMany(user,{  foreignKey: 'DataCourseIdDataCourse'} );
user.belongsTo(datacourse);
/* DataCourse 1->1 User */
user.hasOne(datacourse, {  foreignKey: 'UserIdUser' });
datacourse.belongsTo(user);




exports.user = user;
exports.course = course;
exports.datacourse = datacourse;
exports.statusCourse = statusCourse;
exports.statusUser = statusUser;