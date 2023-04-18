"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class order_items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  order_items.init(
    {
      product_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      price: DataTypes.FLOAT,
      order_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Order_item",
      tableName: "order_items",
    }
  );
  return order_items;
};
