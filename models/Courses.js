module.exports = function(sequelize,DataTypes) {
    const Courses = sequelize.define('Course', {
        idCourse: {
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        statusCourse: {
            type: DataTypes.INTEGER
        },
        nameCourse: {
            type: DataTypes.STRING
        },
        moreInfo: {
            type: DataTypes.STRING
        }
    })
    return Courses;
}