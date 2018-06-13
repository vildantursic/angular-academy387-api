import express from 'express';
import bodyParser from 'body-parser';
import db from './config/database';
import json2xls from 'json2xls';

const app = express();
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to DB');
});

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(json2xls.middleware);

/**
 * ROUTES
 */
const project = require('./routes/project/index');
const complex = require('./routes/complex/index');
const entity = require('./routes/entity/index');
const bimModel = require('./routes/bim-model/index');

app.use('/api/v1/', project);
app.use('/api/v1/', complex);
app.use('/api/v1/', entity);
app.use('/api/v1/', bimModel);

app.listen(3870, () => console.log('W-API listening on port 3870!'));
