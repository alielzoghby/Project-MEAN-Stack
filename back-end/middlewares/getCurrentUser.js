/* eslint-disable no-throw-literal */
const jwt = require('jsonwebtoken');
const asyncFunction = require('./async');

const { JWT_SECRET = 'test' } = process.env;
// require config
module.exports = asyncFunction((req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) {
    throw { status: 401, message: 'Access denied ' };
  }
  const decodedPayload = jwt.verify(token, JWT_SECRET);
  req.currentUserId = decodedPayload.id;
  console.log(req.currentUserId);
  next();
});
