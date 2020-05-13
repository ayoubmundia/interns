/**
 * History Controller module
 * @module HistoryController
 */

const History = require('../../models/Fink/History');
const { Validation, Api, ApiInfo } = require('../../helpers/errorsHelper');

/**
 * Save new query history
 * @param {string} query - The query searched by user.
 * @return {boolean} status
 */
const save = (req, res) => {
  const userID = req.userID;
  const { query } = req.body;

  try {
    const history = new History({
      userID,
      query
    });
    history
      .save()
      .then(() => {
        return res.json({ status: true });
      })
      .catch(err => {
        return res.json(Api(err));
      });
  } catch (err) {
    return res.json(Api(err));
  }
};

/**
 * Get all user history
 * @return {object} histories
 */
const getHistoryByUser = (req, res) => {
  const userID = req.userID;

  try {
    History.find({ userID })
      .sort('-date')
      .then(histories => {
        // let newHistories = [];
        // histories.map(history => {
        //   const date = history.date.toString().split(' ');
        //   const newDate = `${date[1]} ${date[2]} ${date[3]}`;
        //   if (newHistories.length === 0) {
        //     newHistories.push({
        //       date: history.date,
        //       newDate,
        //       histories: [history]
        //     });
        //   } else {
        //     newHistories.map(newHistory => {
        //       if (newDate === newHistory.newDate) {
        //         newHistory.histories.push(history);
        //       } else {
        //         newHistories.push({
        //           date: history.date,
        //           newDate,
        //           histories: [history]
        //         });
        //       }
        //     });
        //   }

        // if (newHistories.length === 0) {
        //   newHistories.push({
        //     date: history.date,
        //     newDate,
        //     histories: [history]
        //   });
        // console.log('ANA HONA 1 -->', newHistories);
        // } else {
        //   newHistories.map(newHistory => {
        //     if (newHistory.newDate === newDate) {
        //       newHistory.histories.push(history);
        //       // console.log('ANA HONA 2 -->', newHistories);
        //     } else if (newHistory._id !== history._id) {
        //       newHistories.push({
        // date: history.date,
        // newDate,
        // histories: [history]
        //       });
        //       // console.log('ANA HONA 3 -->', newHistories);
        //     }
        //   });
        // if (newHistories.newDate === newDate) {
        //   newHistories.histories.push(history);
        // } else {
        //   newHistories = {
        //     date: history.date,
        //     newDate,
        //     histories: [history]
        //   };
        // }
        // }
        // });
        // console.log('newHistories -->', newHistories);
        return res.json({ status: true, histories });
      })
      .catch(err => {
        return res.json(Api(err));
      });
  } catch (err) {
    return res.json(Api(err));
  }
};

module.exports = { save, getHistoryByUser };
