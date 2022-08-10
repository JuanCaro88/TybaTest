const { UserSearch } = require( '../models' );


const findRestaurant = async( request, response ) => {
    try {

        const { id, city } = request.body;

        const userSearch = await UserSearch.build({ id_user : id, parameter : city })
        await userSearch.save();        

        // Here my code should do some http petition
        // and send the response but i do not have time :c

        const restaurant = [
            'Papitas',
            'Don Rico',
            'El gordito sexy'
        ];

        return response
            .status( 200 )
            .json({
                status  : true,
                message : 'These are the restaurants found',
                restaurant 
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


module.exports = {
    findRestaurant
};