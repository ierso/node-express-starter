const express = require('express');
const router = require('./routes');
const config = require('./config');

const { port } = config;

const app = express();

app.set('view engine', 'ejs');
app.use('/', router);

app.listen(port);
