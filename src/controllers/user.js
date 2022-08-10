const bcrypt = require('bcrypt');

const { User } = require( '../models' );


const userGet = async( request, response ) => {
    try {

        const { id } = request.params;

        const user = await User.findOne({ 
            where : { id }, 
            attributes: {
                exclude: ['password'] 
            }
        });
        
        return response
            .status( 200 )
            .json({
                status  : true,
                message : 'The user exist',
                user
            });
        
    } catch ( error ) {
        console.log( error );

        return response
            .status( 500 )
            .json({
                status  : false,
                message : 'Something went wrong',
                error   : error
            });
    };
};


const userPost = async( request, response ) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const { password, ...body } = request.body

        const user = await User.build( body );
        user.password = await bcrypt.hash( password, salt );
        await user.save();

        return response
            .status( 201 )
            .json({
                status  : true,
                message : 'The user was created',
                user    : user
            });

    } catch ( error ) {
        console.log( error );

        return response
            .status( 500 )
            .json({
                status  : false,
                message : 'Something went wrong',
                error   : error
            });
    };
};


const userPut = async( request, response ) => {
    try {

        const { id, ...body } = request.body;
        const user = await User.update( body, { where : { id }, raw : true } );

        if ( user[0] > 0 ) {
            return response
                    .status( 200 )
                    .json({
                        status  : true,
                        message : 'The user was updated',
                    });
        } else {

            return response
                    .status( 200 )
                    .json({
                        status  : false,
                        message : 'The user was not updated',
                    });
        };
        
    } catch ( error ) {
        console.log( error );

        return response
            .status( 500 )
            .json({
                status  : false,
                message : 'Something went wrong',
                error   : error
            });
    };
};


const userDelete = async( request, response ) => {
    try {

        const { id } = request.params;
        const user = await User.update( { status : false }, { where : { id }, raw : true } );

        if ( user[0] > 0 ) {
            return response
                    .status( 200 )
                    .json({
                        status  : true,
                        message : 'The user was deleted',
                    });
        } else {

            return response
                    .status( 200 )
                    .json({
                        status  : false,
                        message : 'The user was not deleted',
                    });
        };
        
    } catch ( error ) {
        console.log( error );

        return response
            .status( 500 )
            .json({
                status  : false,
                message : 'Something went wrong',
                error   : error
            });
    };
};


module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete
};