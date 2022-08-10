const env = require( './environments' );

database_config = {
        "username" : env.DB_USER,
        "password" : env.DB_PASS,
        "database" : env.DB_NAME,
        "host"     : env.DB_HOST,
        "dialect"  : "postgres",
        "logging"  : false,
        "define"   : {
        "schema"     : env.DB_SCHEMA,
        "timestamps" : false
    }   
};

module.exports = database_config;