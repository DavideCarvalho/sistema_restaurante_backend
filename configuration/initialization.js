const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser')
const app = express();

module.exports = () => {
  app.use(bodyParser.json());
  return app;
}