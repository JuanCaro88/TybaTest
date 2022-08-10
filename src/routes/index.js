const express = require('express');
const app = express();

app.use( '/user', require( './user' ) );
app.use( '/login', require( './login' ) );
app.use( '/search', require( './search' ) );

module.exports = app;