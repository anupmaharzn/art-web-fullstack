"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class about_products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Product }) {
      // define association here
      this.belongsTo(Product, {
        foreignKey: "product_id",
        as: "product",
      });
    }
  }
  about_products.init(
    {
      material: DataTypes.STRING,
      size: DataTypes.STRING,
      rarity: DataTypes.STRING,
      condition: DataTypes.STRING,
      signature: DataTypes.STRING,
      COA: DataTypes.STRING,
      frame: DataTypes.STRING,
      product_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "About_product",
      tableName: "about_products",
    }
  );
  return about_products;
};
