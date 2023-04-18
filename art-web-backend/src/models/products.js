"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Category, About_product }) {
      // define association here
      this.belongsTo(Category, {
        foreignKey: "category_id",
        as: "categorys",
      });
      this.hasOne(About_product, {
        foreignKey: "product_id",
        as: "about_product",
      });
    }
  }
  products.init(
    {
      name: DataTypes.STRING,
      theme: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.FLOAT,
      category_id: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product",
      tableName: "products",
    }
  );
  return products;
};
