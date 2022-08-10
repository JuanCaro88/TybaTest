const validations = require( './validations' );
const databaseValidations = require( './database-validations' );
const authentication = require( './authentication' );


module.exports = {
    ...validations,
    ...databaseValidations,
    ...authentication
};