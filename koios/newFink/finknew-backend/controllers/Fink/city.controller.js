/**
 * City Controller module
 * @module CityController
 */

const City = require('../../models/Fink/City');
const { Validation, Api, ApiInfo } = require('../../helpers/errorsHelper');
const { addCity } = require('../../helpers/validationsHelper');

/**
 * Get All City
 * @return {object} Cities
 */
const getAll = (req, res) => {
  try {
    City.find()
      .sort('name')
      .then(cities => {
        return res.json({ status: true, cities });
      })
      .catch(err => {
        return res.json(Api(err));
      });
  } catch (error) {
    return res.json(Api(err));
  }
};

/**
 * Add new City
 * @param {string} name - Name of city
 * @return {boolean} Status
 */
const add = (req, res) => {
  const { name } = req.body;

  const body = { name };

  try {
    addCity(body)
      .then(() => {
        City.findOne({ name })
          .then(city => {
            if (city) return res.json(ApiInfo('Exist'));
            const newCity = new City({ name });
            newCity
              .save()
              .then(() => {
                return res.json({ status: true });
              })
              .catch(err => {
                return res.json(Api(err));
              });
          })
          .catch(err => {
            return res.json(Api(err));
          });
      })
      .catch(err => {
        return res.json(Validation(err));
      });
  } catch (err) {
    return res.json(Api(err));
  }
};

module.exports = { getAll, add };
