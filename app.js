var express = require('express');
const bodyParser = require("body-parser");


var app = express();

/* Database configuration */
const database = require('./config/dbconfig');

/* Init database */
database.init();

/* Init server listening */
const port = process.argv[2] || 3001;
app.listen(port, function () {
    console.log("Server listening on port : " + port);
});

/* Express configuration */
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/* Router configuration */
const REST_API_ROOT = '/api';
app.use(REST_API_ROOT, require('./routes/router'));