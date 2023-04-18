const { check } = require("express-validator");

const productvalidatorRules = () => {
  return [
    check("name")
      .notEmpty()
      .withMessage("product name should not be empty")
      .bail(),
    check("theme")
      .notEmpty()
      .withMessage("theme field should not be empty")
      .bail(),
    check("description")
      .notEmpty()
      .withMessage("description field should not be empty")
      .bail(),
    check("price")
      .notEmpty()
      .withMessage("price field should not be empty")
      .bail()
      .isNumeric()
      .withMessage("price should be numeric")
      .bail(),
    check("category_id")
      .notEmpty()
      .withMessage("should contain category")
      .isNumeric()
      .withMessage("category id should be numeric")
      .bail(),
    check("quantity")
      .notEmpty()
      .withMessage("quantity field should not be empty")
      .bail()
      .isNumeric()
      .withMessage("quantity should be numeric")
      .bail(),
    //check("image").notEmpty().withMessage("should contain image of art").bail(),
    //about product
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
    check("COA").notEmpty()
      .withMessage("COA field should not be empty")
      .bail(),
    check("frame").notEmpty()
      .withMessage("frame field should not be empty")
      .bail(),
  ];
};

module.exports = {
  productvalidatorRules,
};
