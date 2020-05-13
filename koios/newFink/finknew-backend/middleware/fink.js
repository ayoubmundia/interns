const { verify } = require('jsonwebtoken');
const { jwtSecret } = require('../config/config');

module.exports = auth = (req, res, next) => {
  // Get token from header
  const bearerHeader = req.headers['authorization'];

  // Check if not token
  if (!bearerHeader) {
    return res.json({ msg: 'No token, authorization denied' });
    next();
  }

  // Verify token
  try {
    const bearer = bearerHeader.split(' ');
    const token = bearer[1];
    verify(token, jwtSecret, (err, decoded) => (req.userID = decoded.userID));

    next();
  } catch (err) {
    res.json({ msg: 'Token is not valid' });
    next(err);
  }
};
