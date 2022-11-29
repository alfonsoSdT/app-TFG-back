module.exports = function(sequelize,DataTypes) {
    const User = sequelize.define('User', {
        idUser: {
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        DataCourseIdDataCourse: {
            type: DataTypes.INTEGER
        },
        StatusUserIdStatusUser: {
            type: DataTypes.INTEGER
        },
        nameUser: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        surnameUser : {
            type: DataTypes.STRING
        }
    }, {
        timestamps:false
    }
    )
    return User;
}