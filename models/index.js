const Sequelize = require('sequelize')

const Users= require('./Users')
const Courses= require('./Courses')
const DataCourses= require('./DataCourses')
const StatusCourse = require('./StatusCourse')
const StatusUser = require('./StatusUser')

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

exports.user = user;
exports.course = course;
exports.datacourse = datacourse;
exports.statusCourse = statusCourse;
exports.statusUser = statusUser;