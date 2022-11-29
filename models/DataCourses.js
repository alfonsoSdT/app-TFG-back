module.exports = function(sequelize,DataTypes) {
    const DataCourses = sequelize.define('DataCourse', {
        idDataCourse: {
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        UserIdUser: {
            type: DataTypes.INTEGER
        },
        idCourse: {
            type: DataTypes.INTEGER
        },
        dateCertified: {
            type: DataTypes.DATEONLY
        },
        dateExpired: {
            type: DataTypes.DATEONLY
        }
    }, {
        timestamps:false
    })
    return DataCourses;
}