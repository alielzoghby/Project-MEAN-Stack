module.exports = function asyncFunction(routeHandler) {
  return async function (req, res, next) {
    try {
      await routeHandler(req, res);
    } catch (err) {
      next(err);
    }
  };
};
