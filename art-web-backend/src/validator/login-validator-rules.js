const { check } = require("express-validator");

const loginvalidatorRules = () => {
  return [
    check("email")
      .notEmpty()
      .withMessage("email name should not be empty")
      .bail(),
    check("password")
      .notEmpty()
      .withMessage("password field should not be empty")
      .bail(),
  ];
};

module.exports = {
  loginvalidatorRules,
};
