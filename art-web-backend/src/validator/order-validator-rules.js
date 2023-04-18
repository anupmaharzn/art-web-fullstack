const { check } = require("express-validator");

const ordervalidatorRules = () => {
  return [
    check("customer.name")
      .notEmpty()
      .withMessage("customer name should not be empty")
      .bail(),
      check("customer.email")
      .notEmpty()
      .isEmail()
      .withMessage("customer email should not be empty")
      .bail(),
    check("customer.address")
      .notEmpty()
      .withMessage("address field should not be empty")
      .bail(),
    check("customer.contact_no")
      .notEmpty()
      .withMessage("contact field should not be empty")
      .bail()
      .isNumeric()
      .withMessage("contact no should be number")
      .bail(),
    check("customer.city")
      .notEmpty()
      .withMessage("city field should not be empty")
      .bail(),
    check("customer.country")
      .notEmpty()
      .withMessage("should contain country")
      .bail(),
    check("customer.postal_code")
      .notEmpty()
      .withMessage("postal field should not be empty")
      .bail()
      .isNumeric()
      .withMessage("postal code should be numeric")
      .bail(),
    check("order_items.*.product_id")
      .notEmpty()
      .withMessage("product id field should not be empty")
      .bail(),
    check("order_items.*.name")
      .notEmpty()
      .withMessage("name field should not be empty")
      .bail(),
    check("order_items.*.quantity")
      .notEmpty()
      .withMessage("quantity field should not be empty")
      .bail(),
    check("order_items.*.price")
      .notEmpty()
      .withMessage("price field should not be empty")
      .bail(),
  ];
};

module.exports = {
  ordervalidatorRules,
};
