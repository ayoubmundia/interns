// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config();

const Joi = require('@hapi/joi');

// define validation for all the env vars
const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string()
    .allow('dev', 'prod')
    .default('dev'),
  PORT: Joi.number().default(3000),
  JWT_SECRET: Joi.string()
    .required()
    .description('JWT Secret required to sign'),
  MONGODB_URI: Joi.string()
    .required()
    .description('MongoDB URI'),
  NETWORK_FRONT: Joi.string()
    .required()
    .description('Network Front required')
})
  .unknown()
  .required();

const { error, value: envVars } = envVarsSchema.validate(process.env);

if (error) throw new Error(`Config validation error: ${error.message}`);

// MongoDB
const dbURI = `${envVars.MONGODB_URI}-${envVars.NODE_ENV}`;

const config = {
  env: envVars.NODE_ENV,
  PORT: envVars.PORT,
  jwtSecret: envVars.JWT_SECRET,
  networkFront: envVars.NETWORK_FRONT,
  mongo: dbURI,
  mailer: {
    url: envVars.URL,
    apiKey: envVars.APIKEY
  },
  options: {
    allowUnknown: true,
    abortEarly: false
  }
};

module.exports = config;
