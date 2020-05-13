/**
 * Error Helper module
 * @module ErrorHelper
 */

/**
 * Validation Error
 * @param {Array} err - Array of errors.
 * @returns {Array}  Errors{name, message}
 */
const Validation = err => {
  let errors = [];
  err.details.map(error => {
    type = error.type.split('.');
    errors.push({
      name: error.context.label,
      message: error.message,
      type: type[1]
    });
  });

  return {
    status: false,
    errors
  };
};

/**
 * API Error
 * @param {Object} err - Object of errors.
 * @returns {Object}  Errors{name, message}
 */
const Api = err => {
  errors = {
    name: err.name,
    message: err.message
  };

  return {
    status: false,
    errors,
    type: 'API'
  };
};

/**
 * Custom Message Error
 * @param {String} message - Error message.
 * @returns {Object}  Error{message}
 */
const ApiMessage = message => {
  return {
    status: false,
    message,
    type: 'API'
  };
};

/**
 * Send error with info type
 * @param {String} info - Error info.
 * @returns {Object}  Error{info}
 */

const ApiInfo = info => {
  return {
    status: false,
    info,
    type: 'API'
  };
};

module.exports = { Validation, Api, ApiMessage, ApiInfo };
