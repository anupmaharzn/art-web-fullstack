const { check } = require("express-validator");

const categoryvalidatorRules = () => {
  return [
    check("name").notEmpty().withMessage("category should not be empty").bail(),
  ];
};

module.exports = {
  categoryvalidatorRules,
};
