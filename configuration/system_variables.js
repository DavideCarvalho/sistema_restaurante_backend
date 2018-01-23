require('dotenv').config();
const systemVariables = {
  PORT: process.env.PORT,
  ENVIRONMENT: process.env.NODE_ENV,
  DATABASE_URL: `mongodb://${process.env.DATABASE_URL}`
}

module.exports = systemVariables;
