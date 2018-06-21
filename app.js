const express = require('express');
const router = require('./routes');

const app = express();

app.set('view engine', 'ejs');
app.use('/', router);

app.listen(8080);
