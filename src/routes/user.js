const { Router } = require('express');
const { body, param } = require( 'express-validator' );

const userController = require( '../controllers/user' );
const middlewares = require( '../middlewares' );


const router = Router();

router.get(
    '/:id',
    [
        param( 'id', 'The id is required' ).notEmpty(),
        param( 'id', 'The id needs to be a number' ).isNumeric(),
        middlewares.validateFields,
        middlewares.isActiveUser
    ],
    userController.userGet
);


router.post(
    '/',
    [
        body( 'name' , 'The name is required' ).notEmpty(),
        body( 'name', 'Length is max 30 characters' ).isLength({ max : 30 }),
        body( 'lastname' , 'The lastname is required' ).notEmpty(),
        body( 'lastname', 'Length is max 30 characters' ).isLength({ max : 30 }),
        body( 'password' , 'The password is required' ).notEmpty(),
        body( 'email', 'The email is required' ).isEmail(),
        middlewares.validateFields,
        middlewares.emailExist
    ],
    userController.userPost
);


router.put(
    '/',
    [
        body( 'id', 'The id is required' ).notEmpty(),
        body( 'id', 'The id needs to be a number' ).isNumeric(),
        body( 'name' , 'The name is required' ).notEmpty(),
        body( 'name', 'Length is max 30 characters' ).isLength({ max : 30 }),
        body( 'lastname' , 'The lastname is required' ).notEmpty(),
        body( 'lastname', 'Length is max 30 characters' ).isLength({ max : 30 }),
        body( 'password' , 'The password is required' ).notEmpty(),
        body( 'email', 'The email is required' ).isEmail(),
        middlewares.validateFields,
        middlewares.isActiveUser
    ],
    userController.userPut
);


router.delete(
    '/:id',
    [
        param( 'id', 'The id is required' ).notEmpty(),
        param( 'id', 'The id needs to be a number' ).isNumeric(),
        middlewares.validateFields,
        middlewares.isActiveUser
    ],
    userController.userDelete
);


module.exports = router;