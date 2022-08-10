const path = require( 'path' );

const env = require( 'dotenv' )
    .config({
        path : path.resolve( __dirname, `../environments/${ process.env.NODE_ENV }.env` )
    }
);

module.exports = {
    PORT      : env.parsed.PORT,
    ENV       : env.parsed.ENV,
    AUTH      : env.parsed.AUTH_TOKEN,
    JWT       : env.parsed.JWT,
    DB_HOST   : env.parsed.HOST,
    DB_USER   : env.parsed.USER,
    DB_PASS   : env.parsed.PASS,
    DB_NAME   : env.parsed.DB,
    DB_SCHEMA : env.parsed.SCHEMA
};