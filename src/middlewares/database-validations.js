const { User } = require( '../models' );


const emailExist = async( request, response, next ) => {
    const { email } = request.body;
    const user = await User.findOne({ where : { email } });
    if ( user ) {
        return response
            .status( 202 )
            .json({ 
                status  : false,
                message : 'There is already a user with that email'
            });
    };
    next();
};


const isActiveUser = async( request, response, next ) => {
    const id = request.body.id || request.params.id;
    const user = await User.findOne({ 
        where : { 
            id, 
            status : true 
        } 
    });

    if ( !user ) {
        return response
            .status( 202 )
            .json({ 
                status  : false,
                message : 'The user does not exist or is nos active'
            });
    };
    next();
};


module.exports = {
    emailExist,
    isActiveUser
};