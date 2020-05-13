/**
 * Function Utils module
 * @module FunctionUtils
 */

const { sign } = require('jsonwebtoken');
const { jwtSecret, networkFront } = require('../config/config');

/**
 * Generate Validation || Forget Token
 * @param {String} email - Email of user.
 * @returns {String} JWT Token
 */
const generateToken = email => {
  return sign({ email }, jwtSecret, { expiresIn: '1h' });
};

/**
 * Generate Token Login
 * @param {ObjectId} userID - ID of user.
 * @returns {String} JWT Token
 */
const createToken = userID => {
  const payload = { userID };
  var token = sign(payload, jwtSecret, { expiresIn: '4 years' });
  return token;
};

/**
 * Get average count comment Company
 * @param {number} count - Number of count
 * @param {array} rating - Array of rating
 * @returns {string} average - Average count
 */
const getAverage = (count, rating) => {
  const sum = rating.reduce((acc, val) => {
    return acc + val;
  }, 0);
  const average = sum / count;
  return average;
};

/**
 * Get rating count
 * @param {array} rating - Array of rating
 * @returns {object} rating - Object of rating count
 */
const getRatingCount = rating => {
  let i = 0;
  let j = 0;
  let k = 0;
  let l = 0;
  let m = 0;
  let ratingFinal = {};
  rating.map(rate => {
    if (rate === 5) i++;
    if (rate === 4) j++;
    if (rate === 3) k++;
    if (rate === 2) l++;
    if (rate === 1) m++;
  });

  ratingFinal = {
    5: i,
    4: j,
    3: k,
    2: l,
    1: m
  };

  return ratingFinal;
};

/**
 * Count Pourcentage By Rating
 * @param {object} rating - Object of rating
 * * @param {string} count - Count of rating
 * @returns {array} pourcentageRating - Array of rating pourcentage
 */
const countPourcentageByRating = (rating, count) => {
  const getRatingName = key => {
    let name = '';
    if (key === '5') name = 'Excellent';
    if (key === '4') name = 'Très Bien';
    if (key === '3') name = 'Satisfaisant';
    if (key === '2') name = 'Bien';
    if (key === '1') name = 'Moins bien';

    return name;
  };

  let pourcentageRating = [];
  Object.keys(rating).map(key => {
    pourcentageRating.push({
      rating: key,
      name: getRatingName(key),
      pourcentage: ((rating[key] / count) * 100).toFixed(1)
    });
  });
  return pourcentageRating;
};

module.exports = { generateToken, createToken, getAverage, getRatingCount, countPourcentageByRating };
