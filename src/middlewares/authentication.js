const env = require( '../config/environments' );

const jwt = require('jsonwebtoken');


const authentication = ( request, response, next ) => {
    const { auth } = request.headers;
    if ( auth !== env.AUTH ) {
        return response
                .status( 401 )
                .json({
                    status   : false,
                    message  : 'The app is not authentication for perform this action'
                });
    };
    next();
};


const isAuth = ( request, response, next ) => {
    const now = new Date();

    const { token } = request.body;
    const decode = jwt.verify( token, env.JWT );

    if( decode ) {

        if( now.getTime() < decode.exp * 1000 ) {
            request.body.id = decode.id;
            
            next();

        } else {

            return response
                .status( 401 )
                .json({
                    state   : false,
                    message : 'The token has expired'
                });
        };

    } else {
        
        return response
            .status( 401 )
            .json({
                state   : false,
                message : 'The JWT is not valid'
            });
    };
};


module.exports = {
    authentication,
    isAuth
};