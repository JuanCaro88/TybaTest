const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const env = require( '../config/environments' );

const { User, UserSession } = require( '../models' );


const userLogin = async( request, response ) => {
    try {
        const { email, password } = request.body;
        const user = await User.findOne({ where : { email } });

        if( user ) {

            const password_valid = await bcrypt.compare( password, user.password );
    
            if( password_valid ) {

                const token = jwt.sign(
                    {
                        "id"       : user.id,
                        "name"     : user.name,
                        "lastname" : user.lastname,
                        "email"    : user.email
                    }, 
                    env.JWT,
                    {
                        expiresIn: "2h"
                    }
                );

                const userSession = await UserSession.build({
                    id_user : user.id,
                    token
                });
                await userSession.save();
    
                return response
                    .status( 200 )
                    .json({
                        status  : true,
                        message : "The user was loged",
                        token   : token
                    });
    
            } else {
    
                return response
                    .status( 400 )
                    .json({
                        status  : false,
                        message : "The password is incorrect"
                    });
            };

        } else {

            return response
                .status( 400 )
                .json({
                    status  : false,
                    message : "The user does not exit"
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
    }
};


module.exports = {
    userLogin
};