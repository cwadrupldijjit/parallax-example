/// <reference path="../typings/main.d.ts" />

import express = require('express');
import cors = require('cors');
import bodyParser = require('body-parser');

let app = express();
let pathToPublic = __dirname + '/../public';

app.use(cors());
app.use(bodyParser());

app.use('/node_modules', (req, res, next) => {
    console.log('sending node_modules', req.originalUrl); 
    next();
}, express.static(__dirname + '/../node_modules'));
app.use('/app', express.static(pathToPublic + '/app'));

app.all('/*', (req, res) => {
    res.sendFile('index.html', {root: pathToPublic});
});

app.listen(9988, () => {
    console.log('running on localhost, port 9988');
});