/**
 * User Controller module
 * @module UserController
 */

const User = require('../../models/Fink/User');
const { verify } = require('jsonwebtoken');
const { jwtSecret, networkFront } = require('../../config/config');
const { Validation, Api, ApiInfo } = require('../../helpers/errorsHelper');
const { registerUser, loginUser, editInformations, infoUpdate } = require('../../helpers/validationsHelper');
const { generateToken } = require('../../utils/utils');
const { sendEmail } = require('../../helpers/mailHelper');

/**
 * Create new user
 * @param {string} username - The username of user.
 * @param {string} email - The email of user.
 * @param {string} password - The password of user.
 * @return {object} user
 */
const register = (req, res) => {
  const { username, email, password } = req.body;

  const body = {
    username,
    email,
    password,
    passwordConfirm: req.body.passwordConfirm
  };

  try {
    registerUser(body)
      .then(() => {
        User.findOne({ $or: [{ username }, { email }] })
          .then(user => {
            if (user) return res.json(ApiInfo('exist'));
            const token = generateToken(email);
            const newUser = new User({
              username,
              email,
              password,
              token
            });

            newUser.save().then(user => {
              const params = {
                username,
                link: `${networkFront}&token=${token}`
              };
              sendEmail(email, 9, params).then(() => {
                res.json({ status: true, user });
              });
            });
          })
          .catch(err => {
            return res.json(Api(err));
          });
      })
      .catch(err => {
        res.json(Validation(err));
      });
  } catch (error) {
    return res.json(Api(err));
  }
};

/**
 * Validate user account
 * @param {string} token - Token generated .
 * @return {boolean} status
 */
const validate = (req, res) => {
  try {
    const { token } = req.body;
    verify(token, jwtSecret, (err, decoded) => {
      if (err) return res.json(Api(err));
      const email = decoded.email;

      User.findOne({ email })
        .exec()
        .then(user => {
          if (user.emailverified) return res.json(ApiInfo('activated'));

          user.validatedAt = Date.now();
          user.emailverified = true;
          user.token = null;
          user.save();
          return res.json({ status: true });
        })
        .catch(err => {
          return res.json(Api(err));
        });
    });
  } catch (err) {
    return res.json(Api(err));
  }
};

/**
 * Login user
 * @param {string} username || email - The username OR email of user.
 * @param {string} password - The password of user.
 * @return {object} user
 */
const login = (req, res) => {
  const { usermail, password } = req.body;

  const body = { usermail, password };

  try {
    loginUser(body)
      .then(() => {
        User.findOne({ $or: [{ username: usermail }, { email: usermail }] })
          .then(user => {
            if (!user) return res.json(ApiInfo('No found'));
            user.cmpPassword(password, (err, match) => {
              if (!match) return res.json(ApiInfo('Password'));
              res.json({ status: true, user: user.getUser() });
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
 * Forget Password
 * @param {string} email - The email of user.
 * @return {boolean} status
 */
const forget = (req, res) => {
  const { email } = req.body;

  try {
    User.findOne({ email })
      .then(user => {
        if (!user) return res.json(ApiInfo('No found'));
        const token = generateToken(email);
        User.update({ _id: user._id }, { $set: { token } }).then(() => {
          const params = {
            link: `${networkFront}&token=${token}`
          };
          sendEmail(email, 14, params).then(() => {
            res.json({ status: true });
          });
        });
      })
      .catch(err => {
        return res.json(Api(err));
      });
  } catch (err) {
    return res.json(Api(err));
  }
};

/**
 * Check && Update user password
 * @param {string} token - Token generated .
 * @return {boolean} status
 */
const changePassword = (req, res) => {
  try {
    const { token, oldPassword, newPassword } = req.body.data;

    if (token && !oldPassword && !newPassword)
      verify(token, jwtSecret, (err, decoded) => {
        const email = decoded.email;
        if (err) return res.json(Api(err));
        User.findOne({ $and: [{ token }, { email }] }).then(user => {
          console.log(user);
          if (!user) return res.json(Api(err));
          return res.json({ status: true });
        });
      });
    else
      verify(token, jwtSecret, (err, decoded) => {
        if (err) return res.json(Api(err));
        const email = decoded.email;
        User.findOne({ email })
          .then(user => {
            if (!user) return res.json(ApiInfo('No found'));
            user.cmpPassword(oldPassword, (err, match) => {
              if (!match) return res.json(ApiInfo('Password'));
              user.password = newPassword;
              user.token = null;
              user
                .save()
                .then(user => {
                  return res.json({ status: true, user: user.getUser() });
                })
                .catch(err => {
                  return res.json(Api(err));
                });
            });
          })
          .catch(err => {
            return res.json(Api(err));
          });
      });
  } catch (err) {
    return res.json(Api(err));
  }
};

/**
 * Get User Information with userID from request
 * @returns {object} User
 */
const getUser = (req, res) => {
  try {
    const _id = req.userID;
    User.findOne({ _id })
      .lean()
      .exec()
      .then(user => {
        delete user.password;
        delete user._id;
        delete user.token;
        delete user.validatedAt;
        delete user.createdAt;
        return res.json({ user });
      })
      .catch(err => {
        return res.json(Api(err));
      });
  } catch (err) {
    return res.json(Api(err));
  }
};

/**
 * Check User Password
 * @param {string} password - User Password
 * @returns {boolean} Status
 */
const checkPassword = (req, res) => {
  const { password } = req.body;
  const _id = req.userID;

  try {
    User.findOne({ _id })
      .then(user => {
        user.cmpPassword(password, (err, match) => {
          if (!match) return res.json(ApiInfo('Password'));

          return res.json({ status: true });
        });
      })
      .catch(err => {
        return res.json(Api(err));
      });
  } catch (err) {
    return res.json(Api(err));
  }
};

/**
 * Edit User email
 * @param {string} Email - New email for user
 * @returns {object} User
 */
const editEmail = (req, res) => {
  const _id = req.userID;
  const { email } = req.body;

  try {
    User.findOne({ email })
      .then(user => {
        if (user) return res.json(ApiInfo('exist'));

        User.findOne({ _id })
          .then(user => {
            if (!user.emailverified) return res.json(ApiInfo('No Valid'));
            const token = generateToken(email);
            user.email = email;
            user.token = token;
            user.emailverified = false;
            user
              .save()
              .then(user => {
                const params = {
                  username: user.username,
                  link: `${networkFront}&token=${token}`
                };
                sendEmail(email, 9, params).then(() => {
                  res.json({ status: true, user });
                });
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
        return res.json(Api(err));
      });
  } catch (err) {
    return res.json(Api(err));
  }
};

/**
 * Edit User password
 * @param {string} Password - New password for user
 * @returns {object} User
 */
const editPassword = (req, res) => {
  const _id = req.userID;
  const { password } = req.body;

  try {
    User.findOne({ _id })
      .then(user => {
        if (!user.emailverified) return res.json(ApiInfo('No Valid'));
        user.password = password;
        user
          .save()
          .then(user => {
            return res.json({ status: true, user: user.getUser() });
          })
          .catch(err => {
            return res.json(Api(err));
          });
      })
      .catch(err => {
        return res.json(Api(err));
      });
  } catch (err) {
    return res.json(Api(err));
  }
};

/**
 * Edit User Information
 * @param {username} Username - Username for user
 * @param {lastName} lastName - LastName for user
 * @param {firstName} firstName - FirstName for user
 * @param {birthday} Birthday - Birthday for user
 * @param {sexe} sexe - Sexe for user
 * @param {adresse} adresse - Adresse for user
 * @param {ville} ville - Ville for user
 * @param {phone} phone - Phone for user
 * @returns {object} User
 */
const informationsEdit = (req, res) => {
  const { username, lastName, firstName, birthday, sexe, adresse, ville, phone } = req.body;
  const _id = req.userID;

  const body = { username, lastName, firstName, birthday, sexe, adresse, ville, phone };

  try {
    editInformations(body)
      .then(() => {
        User.findOne({ _id })
          .then(user => {
            if (!user.emailverified) return res.json(ApiInfo('No Valid'));
            user.username = username;
            user.first_name = firstName;
            user.last_name = lastName;
            user.birthday = birthday;
            user.sexe = sexe;
            user.addresse = adresse;
            user.city = ville;
            user.phone = phone;
            user
              .save()
              .then(user => {
                return res.json({ status: true, user: user.getUser() });
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
        console.log('err -->', err);
        return res.json(Validation(err));
      });
  } catch (err) {
    return res.json(Api(err));
  }
};

/**
 * Send User verify Email
 * @param {string} Email - Email for user
 * @returns {boolean} Status
 */
const sendVerifEmail = (req, res) => {
  const _id = req.userID;
  const { email } = req.body;

  try {
    User.findOne({ _id })
      .then(user => {
        const token = generateToken(email);
        user.token = token;
        user.emailverified = false;
        user
          .save()
          .then(user => {
            const params = {
              username: user.username,
              link: `${networkFront}validate?token=${token}`
            };
            sendEmail(email, 9, params).then(() => {
              res.json({ status: true, user });
            });
          })
          .catch(err => {
            return res.json(Api(err));
          });
      })
      .catch(err => {
        return res.json(Api(err));
      });
  } catch (err) {
    return res.json(Api(err));
  }
};

/**
 * Update User Information
 * @param {lastName} lastName - LastName for user
 * @param {firstName} firstName - FirstName for user
 * @param {phone} phone - Phone for user
 * @returns {object} User
 */
const updateInfo = (req, res) => {
  const { lastName, firstName, phone } = req.body;
  const _id = req.userID;

  const body = { lastName, firstName, phone };

  try {
    infoUpdate(body)
      .then(() => {
        User.findOne({ _id })
          .then(user => {
            user.first_name = firstName;
            user.last_name = lastName;
            user.phone = phone;
            user
              .save()
              .then(user => {
                return res.json({ status: true, user: user.getUser() });
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
        console.log('err -->', err);
        return res.json(Validation(err));
      });
  } catch (err) {
    return res.json(Api(err));
  }
};

module.exports = {
  register,
  validate,
  login,
  forget,
  changePassword,
  getUser,
  editEmail,
  checkPassword,
  editPassword,
  informationsEdit,
  sendVerifEmail,
  updateInfo
};
