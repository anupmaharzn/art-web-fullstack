"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Customer_info, Order_item, Product }) {
      // define association here
      this.belongsTo(Customer_info, {
        foreignKey: "customer_info_id",
        as: "customer_info",
      });
      this.hasMany(Order_item, {
        foreignKey: "order_id",
        as: "orderitem",
      });
    }
  }
  orders.init(
    {
      customer_info_id: DataTypes.INTEGER,
      totalprice: DataTypes.FLOAT,
      order_status: DataTypes.STRING,
      order_date: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Order",
      tableName: "orders",
    }
  );
  return orders;
};
