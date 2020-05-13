const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { createToken } = require('../../utils/utils');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  first_name: {
    type: String,
    trim: true,
    lowercase: true
  },
  last_name: {
    type: String,
    trim: true,
    lowercase: true
  },
  addresse: {
    type: String,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    trim: true,
    lowercase: true
  },
  city: { type: String, trim: true },
  sexe: { type: String, trim: true },
  fonction: { type: String, trim: true },
  image: { type: String, trim: true },
  birthday: { type: Date },
  location: { lat: Number, long: Number },
  social_media: [{ id: String, name: String }],
  token: { type: String, trim: true },
  favoris: [
    {
      companyID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
      },
      addedAt: {
        type: Date,
        default: Date.now()
      }
    }
  ],
  visitor: { type: Boolean, default: false },
  status: { type: Boolean, default: true },
  emailverified: { type: Boolean, default: false },
  validatedAt: { type: Date },
  createdAt: { type: Date, default: Date.now() }
});

/**
 * Pre-save hooks
 */
UserSchema.pre('save', function(next) {
  let user = this;

  if (!user.isModified('password')) next();

  // Hash Password
  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) return next(err);
    user.password = hash;
    return next();
  });
});

/**
 * Methods
 */
UserSchema.methods = {
  cmpPassword(password, done) {
    bcrypt.compare(password, this.password, (err, match) => {
      if (err || !match) return done(err);
      done(null, match);
    });
  },

  getUser() {
    const user = this._doc;
    delete user.password;
    delete user.token;
    user.token = createToken(user._id);
    return user;
  }
};

module.exports = mongoose.model('User', UserSchema);
