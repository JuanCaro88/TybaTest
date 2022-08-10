const { Router } = require('express');
const { body, param } = require( 'express-validator' );


const searchController = require( '../controllers/search' );
const middlewares = require( '../middlewares' );


const router = Router();


router.post(
    '/restaurant',
    [
        body( 'city', 'The city is required' ).notEmpty(),
        body( 'token', 'The token is required').notEmpty(),
        middlewares.validateFields,
        middlewares.isAuth
    ],
    searchController.findRestaurant
);


module.exports = router;