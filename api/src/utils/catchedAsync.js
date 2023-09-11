module.exports = (controller) => {
    return function (req, res, next) {
      controller(req, res).catch((err) => {
        next(err);
      });
    };
  };