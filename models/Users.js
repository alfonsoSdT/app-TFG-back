module.exports = function(sequelize,DataTypes) {
    const User = sequelize.define('User', {
        idUser: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoincrement: true
        },
        StatusUserIdStatusUser: {
            type: DataTypes.INTEGER
        },
        nameUser: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING,
            default: 'defaultpassword'
        },
        surnameUser : {
            type: DataTypes.STRING
        },
        brithDate : {
            type: DataTypes.DATEONLY
        },
        email : {
            type: DataTypes.STRING
        }        
    }, {
        timestamps:false
    }
    )
    return User;
}