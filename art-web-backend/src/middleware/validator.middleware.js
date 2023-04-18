const { validationResult } = require("express-validator");

const validateMiddleware = (req, res, next) => {
  const result = validationResult(req);

  if (!result.isEmpty()) {
    return res.status(400).send({
      errors: result.array(),
    });
  }
  next();
};

module.exports = {
  validateMiddleware,
};
