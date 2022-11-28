module.exports = function(sequelize,DataTypes) {
    const User = sequelize.define('User', {
        idUser: {
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        idDataCourse: {
            type: DataTypes.INTEGER
        },
        statusUser: {
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
    })
    return User;
}