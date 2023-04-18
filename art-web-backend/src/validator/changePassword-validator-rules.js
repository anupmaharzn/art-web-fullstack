const { check } = require("express-validator");

const changePasswordvalidatorRules = () => {
  return [
    check("oldPassword")
      .notEmpty()
      .withMessage("oldPassword should not be empty")
      .bail(),
    check("newPassword")
      .notEmpty()
      .withMessage("should provide new password")
      .bail(),
    check("confirmPassword")
      .notEmpty()
      .withMessage("should provide confirm password")
      .bail(),
  ];
};

module.exports = {
  changePasswordvalidatorRules,
};
