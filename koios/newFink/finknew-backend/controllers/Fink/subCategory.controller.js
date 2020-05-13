/**
 * Sub Category Controller module
 * @module SubCategoryController
 */

const SubCategory = require('../../models/Fink/SubCategory');
const { Validation, Api, ApiInfo } = require('../../helpers/errorsHelper');

/**
 * Get All SubCategory
 * @return {object} SubCategories
 */
const getAll = (req, res) => {
  try {
    SubCategory.find()
      .sort('name')
      .then(subCategories => {
        return res.json({ status: true, subCategories });
      })
      .catch(err => {
        return res.json(Api(err));
      });
  } catch (error) {
    return res.json(Api(err));
  }
};

/**
 * Get All SubCategory For One Category
 * @param {mongoose.ObjectId} companyID - ID of the company.
 * @return {object} SubCategories
 */
const getOne = (req, res) => {
  const { category } = req.body;

  try {
    SubCategory.find({ category })
      .sort('name')
      .then(subCategories => {
        return res.json({ status: true, subCategories });
      })
      .catch(err => {
        return res.json(Api(err));
      });
  } catch (error) {
    return res.json(Api(err));
  }
};

module.exports = { getAll, getOne };
