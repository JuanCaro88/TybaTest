const env = require( './src/config/environments' );

const database = require( './src/models' );
const authentication = require( './src/middlewares/authentication' );

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');


// Application
const app = express();
app.set( 'port', env.PORT || 3000 );


// Middlewares
app.use( morgan( 'dev' ) );
app.use( cors() );
app.use( express.json() );
app.use( express.urlencoded({ extended : false }) );
app.use( authentication.authentication );


// Routes
app.use( '/api/v1', require('./src/routes') );


database.sequelize.sync()
    .then( request => {

        console.log( `The database is connected to the ${env.ENV}` );
        
        app.listen( app.get( 'port' ), () => {
            console.log( 'The server is listening in port:', app.get( 'port' ) );
        });

    })
    .catch( error => {
        console.log( error );
    })