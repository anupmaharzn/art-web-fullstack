const { check } = require("express-validator");

const aboutProductvalidatorRules = () => {
  return [
    check("material")
      .notEmpty()
      .withMessage("material name should not be empty")
      .bail()
      .isString()
      .withMessage("string format")
      .bail(),
    check("size")
      .notEmpty()
      .withMessage("size field should not be empty")
      .isString()
      .bail()
      .withMessage("string format")
      .bail(),
    check("rarity")
      .notEmpty()
      .withMessage("rarity field should not be empty")
      .bail(),
    check("condition")
      .notEmpty()
      .withMessage("condition field should not be empty")
      .bail(),
    check("signature")
      .notEmpty()
      .withMessage("signature field should not be empty")
      .bail(),
    check("COA").optional(),
    check("frame").optional(),
    check("product_id")
      .notEmpty()
      .withMessage("product_id should not be empty")
      .bail(),
  ];
};

module.exports = {
  aboutProductvalidatorRules,
};
