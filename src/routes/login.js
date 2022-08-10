const { Router } = require('express');
const { body, param } = require( 'express-validator' );

const userLogin = require( '../controllers/login' );
const middlewares = require( '../middlewares' );


const router = Router();


router.post(
    '/',
    [
        body( 'email', 'The email is required' ).isEmail(),
        body( 'password', 'The password is required' ).notEmpty(),
        middlewares.validateFields
    ],
    userLogin.userLogin
);


module.exports = router;