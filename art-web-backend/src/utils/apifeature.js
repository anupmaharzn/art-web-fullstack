const { Product, sequelize } = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const pagination = (resultPerPage, queryStr) => {
  const currentPage = Number(queryStr) || 1;
  const skipProduct = resultPerPage * (currentPage - 1);
  return {
    offset: skipProduct,
    limit: resultPerPage,
  };
};

const search = (queryStr) => {
  if (queryStr) {
    const searchproduct = queryStr.toLowerCase();
    return {
      where: {
        [Op.or]: [
          { name: { [Op.like]: "%" + searchproduct + "%" } },
          { description: { [Op.like]: "%" + searchproduct + "%" } },
        ],
      },
    };
  }
};

const updateQuantity = async (id, quantity) => {
  const product = await Product.findOne({
    where: {
      id: id,
    },
  });
  product.quantity = product.quantity - quantity;
  if (product.quantity < 0) {
    product.quantity = 0;
  }
  await product.save();
  console.log("decred quantity product", product);
};

module.exports = { pagination, search, updateQuantity };
