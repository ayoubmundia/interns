/**
 * Mail Helper module
 * @module MailHelper
 */

const { mailer } = require('../config/config');
const request = require('request');

exports.sendEmail = async function(toEmail, templateId, params) {
  const data = {
    to: [
      {
        name: 'Contact',
        email: toEmail
      }
    ],
    params: params,
    replyTo: {
      email: 'contact@fink.ma',
      name: 'fink'
    },
    templateId: templateId,
    tags: ['contact-form']
  };

  var options = {
    method: 'POST',
    headers: {
      'api-key': mailer.apiKey,
      'Content-Type': 'application/json'
    },
    url: mailer.url,
    body: data,
    json: true
  };
  await request(options, (error, response, body) => {
    if (error) return false;

    console.log('--response body--', body);
    return true;
  });
};
