"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class customer_info extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Order }) {
      // define association here
      this.hasMany(Order, {
        foreignKey: "customer_info_id",
        as: "Orders",
      });
    }
  }
  customer_info.init(
    {
      name: DataTypes.STRING,
      email:DataTypes.STRING,
      address: DataTypes.STRING,
      contact_no: DataTypes.STRING,
      city: DataTypes.STRING,
      country: DataTypes.STRING,
      postal_code: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Customer_info",
      tableName: "customers_info",
    }
  );
  return customer_info;
};
