// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
   console.log(err)
  res.status(err.status).json(err);
};
