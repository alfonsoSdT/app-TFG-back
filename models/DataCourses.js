module.exports = function(sequelize,DataTypes) {
    const DataCourses = sequelize.define('DataCourse', {
        idDataCourse: {
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        idUser: {
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
    })
    return DataCourses;
}