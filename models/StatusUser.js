module.exports = function(sequelize,DataTypes) {
    const StatusUser = sequelize.define('StatusUser', {
        idStatusUser: {
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        statusUserName: {
            type: DataTypes.STRING
        }
    }, {
        timestamps:false
    })
    return StatusUser;
}