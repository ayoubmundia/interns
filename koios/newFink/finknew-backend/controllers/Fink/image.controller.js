/**
 * Image Controller module
 * @module ImageController
 */

const User = require('../../models/Fink/User');
const fs = require('fs');
const { verify } = require('jsonwebtoken');
const { jwtSecret, networkFront } = require('../../config/config');
const { compare } = require('bcrypt');
const { Validation, Api, ApiInfo } = require('../../helpers/errorsHelper');
const { registerUser, loginUser } = require('../../helpers/validationsHelper');
const { generateToken, createToken } = require('../../utils/utils');
const { sendEmail } = require('../../helpers/mailHelper');

/**
 * Set OR Update user profile image
 * @property {string} base64 Image - Base64 Image generated .
 * @return {boolean} status
 */
const updateImage = async (req, res) => {
  try {
    const img = fs.readFileSync(req.file.path);
    const encode_image = img.toString('base64');

    if (!fs.existsSync('./uploads/profil')) fs.mkdirSync('./uploads/profil');

    // convert photo from base64
    const base64Image = encode_image.split(';base64,').pop();

    const ext = req.file.mimetype === 'image/jpeg' ? '.jpg' : '.png';

    const filename = 'uploads/profil/' + Date.now() + '-' + req.userID + ext;

    await fs.writeFile(filename, base64Image, { encoding: 'base64' }, err => {
      if (err) return res.json(Api(err));

      // Remove file after save
      fs.unlinkSync(req.file.path);

      User.findOne({ _id: req.userID })
        .then(user => {
          user.image = filename;
          user
            .save()
            .then(() => {
              res.json({ status: true });
            })
            .catch(err => {
              return res.json(Api(err));
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

module.exports = { updateImage };
