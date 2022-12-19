module.exports = function(sequelize,DataTypes) {
    const Courses = sequelize.define('Course', {
        idCourse: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoincrement: true
        },
        StatusCourseIdStatusCourse: {
            type: DataTypes.INTEGER
        },
        nameCourse: {
            type: DataTypes.STRING
        },
        hoursNeeded:{
            type: DataTypes.INTEGER
        },
        pricePerHour:{
            type: DataTypes.INTEGER
        },
        moreInfo: {
            type: DataTypes.STRING
        }
    }, {
        timestamps:false
    })
    return Courses;
}