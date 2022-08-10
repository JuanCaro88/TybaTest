module.exports = ( sequelize, DataTypes ) => {
    const UserSession = sequelize.define(
        'UserSession', // Model name
        {
            id : {
                type          : DataTypes.INTEGER,
                autoIncrement : true,
                primaryKey    : true
            },
            id_user : {
                type      : DataTypes.INTEGER,
                require   : true,
                allowNull : false
            },
            token : {
                type      : DataTypes.STRING(30),
                require   : true,
                allowNull : false
            }
        },
        {
            tableName : 'users_sessions'
        }
    );
    return UserSession;
};