const { validationResult } = require( 'express-validator' );


const validateFields = ( request, response, next ) => {
    const errors = validationResult( request );
    if( !errors.isEmpty() ) {
        return response
                .status( 400 )
                .json({
                    status : false,
                    errors : errors.errors
                });
    };
    next();
};


module.exports = {
    validateFields
};