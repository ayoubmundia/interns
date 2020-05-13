/**
 * Category Controller module
 * @module CategoryController
 */

const Category = require('../../models/Fink/Category');
const { Validation, Api, ApiInfo } = require('../../helpers/errorsHelper');
const { addCategory } = require('../../helpers/validationsHelper');

/**
 * Get All Category
 * @return {object} Categories
 */
const getAll = (req, res) => {
  try {
    Category.find()
      .sort('name')
      .then(categories => {
        return res.json({ status: true, categories });
      })
      .catch(err => {
        return res.json(Api(err));
      });
  } catch (error) {
    return res.json(Api(err));
  }
};

/**
 * Add new Category
 * @param Name of category
 * @param Image of category
 * @return {boolean} Status
 */
const add = (req, res) => {
  const { name, image } = req.body;

  const body = { name, image };

  try {
    addCategory(body)
      .then(() => {
        Category.findOne({ name })
          .then(category => {
            if (category) return res.json(ApiInfo('Exist'));
            const newCategory = new Category({ name, image });
            newCategory
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
