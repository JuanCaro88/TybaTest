module.exports = ( sequelize, DataTypes ) => {
    const User = sequelize.define(
        'User', // Model name
        {
            id : {
                type          : DataTypes.INTEGER,
                autoIncrement : true,
                primaryKey    : true
            },
            name : {
                type      : DataTypes.STRING(30),
                require   : true,
                allowNull : false
            },
            lastname : {
                type      : DataTypes.STRING(30),
                require   : true,
                allowNull : false
            },
            password : {
                type      : DataTypes.STRING(30),
                require   : true,
                allowNull : false  
            },
            email : {
                type      : DataTypes.STRING,
                allowNull : false,
                unique    : true,
                validate: {
                    isEmail: {
                    msg    : "Must be a valid email address",
                    }
                }
            },
            status : {
                type :  DataTypes.BOOLEAN
            }
        },
        {
            tableName : 'users'
        }
    );
    return User;
};