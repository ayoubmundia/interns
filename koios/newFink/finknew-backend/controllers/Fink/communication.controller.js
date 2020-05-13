/**
 * Communication Controller module
 * @module CommunicationController
 */

const User = require('../../models/Fink/User');
const Message = require('../../models/Fink/Message');
const Comment = require('../../models/Fink/Comment');
const { getAverage, getRatingCount, countPourcentageByRating } = require('../../utils/utils');
const { Validation, Api, ApiInfo } = require('../../helpers/errorsHelper');

/**
 * Add Or Remove company to User Favorites
 * @param {string} type - Type of action.
 * @param {mongoose.ObjectId} companyID - ID of the company.
 * @return {boolean} Status
 */
const favorites = (req, res) => {
  const _id = req.userID;

  const { type, companyID } = req.body;

  try {
    const Favorie = { companyID };
    if (type === 'add') {
      User.update({ _id }, { $push: { favoris: Favorie } })
        .then(() => {
          return res.json({ status: true });
        })
        .catch(err => {
          return res.json(Api(err));
        });
    } else {
      User.update({ _id }, { $pull: { favoris: Favorie } })
        .then(() => {
          return res.json({ status: true });
        })
        .catch(err => {
          return res.json(Api(err));
        });
    }
  } catch (error) {
    return res.json(Api(err));
  }
};

/**
 * Send Message to Company
 * @param {mongoose.ObjectId} companyID - ID of the company.
 * @param {mongoose.ObjectId} userID - ID of the user.
 * @param {string} subject - Subject of the message.
 * @param {string} message - Message of the message.
 * @return {boolean} Status
 */
const sendMessage = (req, res) => {
  const userID = req.userID;
  const { companyID, subject, message } = req.body;

  try {
    const newMessage = new Message({
      companyID,
      userID,
      subject,
      message
    });

    newMessage
      .save()
      .then(() => {
        return res.json({ status: true });
      })
      .catch(err => {
        return res.json(Api(err));
      });
  } catch (error) {
    return res.json(Api(err));
  }
};

/**
 * Create comment for Company
 * @param {mongoose.ObjectId} companyID - ID of the company.
 * @param {mongoose.ObjectId} userID - ID of the user.
 * @param {string} comment - Comment message.
 * @param {string} message - Company rating.
 * @return {boolean} Status
 */
const createComment = (req, res) => {
  const userID = req.userID;
  const { companyID, comment, rating } = req.body;

  try {
    const newComment = new Comment({
      companyID,
      userID,
      comment,
      rating
    });

    newComment
      .save()
      .then(() => {
        return res.json({ status: true });
      })
      .catch(err => {
        return res.json(Api(err));
      });
  } catch (error) {
    return res.json(Api(err));
  }
};

/**
 * Get comment for Company
 * @param {mongoose.ObjectId} companyID - ID of the company.
 * @return {boolean} Status
 */

const getComment = (req, res) => {
  const { companyID } = req.body;
  let count = 0;

  try {
    Comment.find({ companyID })
      .populate('userID')
      .lean()
      .exec()
      .then(comments => {
        let allComments = [];
        let allRating = [];
        comments.map(comment => {
          allRating.push(comment.rating);
          allComments.push({
            comment: comment.comment,
            rating: comment.rating,
            user: comment.userID.username,
            date: comment.createdAt
          });
        });
        const average = getAverage(comments.length, allRating);
        const pourcentage = countPourcentageByRating(getRatingCount(allRating), comments.length).reverse();
        const info = {
          count: comments.length,
          average: average.toFixed(1),
          pourcentage
        };
        return res.json({ status: true, comments: allComments, info });
      })
      .catch(err => {
        return res.json(Api(err));
      });
  } catch (error) {
    return res.json(Api(err));
  }
};

module.exports = { favorites, sendMessage, createComment, getComment };
