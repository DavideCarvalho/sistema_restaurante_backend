const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
module.exports = app;