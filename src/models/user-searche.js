module.exports = ( sequelize, DataTypes ) => {
    const UserSearch = sequelize.define(
        'UserSearch', // Model name
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
            parameter : {
                type      : DataTypes.STRING,
                require   : true,
                allowNull : false
            }
        },
        {
            tableName : 'users_searches'
        }
    );
    return UserSearch;
};