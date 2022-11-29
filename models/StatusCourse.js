module.exports = function(sequelize,DataTypes) {
    const StatusCourse = sequelize.define('StatusCourse', {
        idStatusCourse: {
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        statusCourseName: {
            type: DataTypes.STRING
        }
    }, {
        timestamps:false
    })
    return StatusCourse;
}