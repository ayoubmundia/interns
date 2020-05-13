/**
 * Company Controller module
 * @module CompanyController
 */

const Company = require('../../models/Fink/Company');
const { Validation, Api, ApiInfo } = require('../../helpers/errorsHelper');
const { addCompany } = require('../../helpers/validationsHelper');
const elasticQueries = require('../../utils/elasticQueries');
const elasticsearch = require('elasticsearch');

/**
 * Init Client elasticSearch
 */
const client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace',
  apiVersion: '7.5'
});

/**
 * Add new Company
 * @param title of company
 * @param email of company
 * @param phone of company
 * @param city of company
 * @param address of company
 * @param description of company
 * @param category of company
 * @param subCategory of company
 * @param website of company
 * @param facebook of company
 * @param twitter of company
 * @param linkedin of company
 * @param instagram of company
 * @param youtube of company
 * @param long of company
 * @param lat of company
 * @param urlMaps of company
 * @return {Object} Company
 */
const add = (req, res) => {
  const {
    title,
    email,
    phone,
    city,
    address,
    description,
    category,
    subCategory,
    website,
    facebook,
    twitter,
    linkedin,
    instagram,
    youtube,
    long,
    lat,
    urlMaps
  } = req.body;

  const body = {
    title,
    email,
    phone,
    city,
    address,
    description,
    category,
    subCategory,
    website,
    facebook,
    twitter,
    linkedin,
    instagram,
    youtube,
    long,
    lat,
    urlMaps
  };

  let subCat = [];
  subCategory.map(cur => {
    subCat.push(cur._id);
  });

  try {
    addCompany(body)
      .then(() => {
        Company.findOne({ title })
          .then(company => {
            if (company) return res.json(ApiInfo('Exist'));
            const newCompany = new Company({
              title,
              description,
              category: category._id,
              email,
              phone,
              location: {
                address,
                city: city._id,
                lat,
                long,
                mapsUrl: urlMaps
              },
              socialemedia: {
                facebook,
                youtube,
                linkedin,
                instagram,
                twitter
              },
              subCategory: subCat,
              website
            });
            newCompany
              .save()
              .then(company => {
                return res.json({ status: true, company });
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

/**
 * Get One Company
 * @param {mongoose.ObjectId} companyID - ID of the company
 * @return {object} Cities
 */
const get = (req, res) => {
  const { companyID } = req.body;

  try {
    Company.findOne({ _id: companyID })
      .populate('category')
      .populate('location.city')
      .then(company => {
        if (!company) return res.json(ApiInfo('No Exist'));

        return res.json({ status: true, company });
      })
      .catch(err => {
        return res.json(Api(err));
      });
  } catch (err) {
    return res.json(Api(err));
  }
};

/**
 * Search Company with ElasticSearch
 * @param {string} Query - Query for Search
 * @return {object} Cities
 */
const search = async (req, res) => {
  const { keyword, city, category } = req.body;

  try {
    let query = {
      query: {
        bool: {
          should: [],
          filter: []
        }
      }
    };

    let searchParams = {
      index: 'companys',
      from: 0,
      size: 10000
    };

    if (keyword) {
      query.query.bool.should = elasticQueries.keyword(keyword);
      query.query.bool.minimum_should_match = 1;

      if (city || category) {
        if (city && !category) query.query.bool.filter.push(elasticQueries.smiyat('city', city));
        else if (category && !city) query.query.bool.filter.push(elasticQueries.smiyat('category', category));
        else if (city && category)
          query.query.bool.filter.push(
            elasticQueries.smiyat('city', city),
            elasticQueries.smiyat('category', category)
          );
      }
    }

    if (query) searchParams.body = query;
    const results = await client.search(searchParams);

    return res.json({ status: true, results });
  } catch (err) {
    console.log('err --> ', err);
    return res.json(Api(err));
  }
};

module.exports = { add, get, search };
