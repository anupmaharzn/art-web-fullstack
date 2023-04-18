const { Product, About_product } = require("../models");
const aboutProductServices = require("../services/about_product.services");
const { pagination, search } = require("../utils/apifeature");
const store = async (productData, aboutProduct) => {
  try {
    const product = await Product.create(productData);
    if (aboutProduct) {
      if (product) {
        aboutProduct["product_id"] = product.id;
        const aboutproduct = await aboutProductServices.store(aboutProduct);
        console.log(aboutproduct);
      }
    }
    if (product) {
      return {
        message: "Product created sucessfully",
        data: product,
        error: false,
        status: 201,
      };
    } else {
      return {
        message: "Product creation failed",
        status: 400,
        error: true,
        data: null,
      };
    }
  } catch (error) {
    return {
      message: "Bad request",
      status: 400,
      error: true,
      data: null,
    };
  }
};

const get = async (queryStr) => {
  const resultPerPage = 8;
  try {
    const productCount = await Product.count();
    const product = await Product.findAll({
      include: [
        {
          model: About_product,
          as: "about_product",
        },
      ],
      ...pagination(resultPerPage, queryStr.page),
      ...search(queryStr.search),
    });
    if (product) {
      return {
        message: "Success",
        data: product,
        productCount,
        resultPerPage,
        error: false,
        status: 200,
      };
    } else {
      return {
        message: "Fail",
        status: 400,
        error: true,
        data: null,
      };
    }
  } catch (error) {
    return {
      message: "Bad request",
      status: 400,
      error: error,
      data: null,
    };
  }
};
const getbyId = async (id) => {
  try {
    const product = await Product.findOne({
      where: {
        id: id,
      },
      include: [
        {
          model: About_product,
          as: "about_product",
        },
      ],
    });
    if (product) {
      return {
        message: "Success",
        data: product,
        error: false,
        status: 200,
      };
    } else {
      return {
        message: "Fail",
        status: 400,
        error: true,
        data: null,
      };
    }
  } catch (error) {
    return {
      message: "Bad request",
      status: 400,
      error: error,
      data: null,
    };
  }
};
const edit = async (id, productdata, aboutProduct) => {
  try {
    const product = await Product.findOne({
      where: {
        id: id,
      },
      include: [
        {
          model: About_product,
          as: "about_product",
        },
      ],
    });
    console.log(product);
    if (product) {
      product.name = productdata.name || product.name;
      product.theme = productdata.theme || product.theme;
      product.description = productdata.description || product.description;
      product.price = productdata.price || product.price;
      product.category_id = productdata.category_id || product.category_id;
      product.quantity = productdata.quantity || product.quantity;
      product.image = productdata.image || product.image;
      await product.save();
      if (aboutProduct) {
        aboutProduct["product_id"] = product.id;
        const aboutproduct = await aboutProductServices.edit(
          product.about_product.id,
          aboutProduct
        );
        console.log("aboutproduct edit", aboutproduct);
      }
      return {
        message: "Success,product updated",
        data: product,
        error: false,
        status: 200,
      };
    } else {
      return {
        message: "Fail,product not found",
        status: 404,
        error: true,
        data: null,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      message: "Bad request",
      status: 400,
      error: error,
      data: null,
    };
  }
};
const destroy = async (id) => {
  try {
    const product = await Product.findOne({
      where: {
        id: id,
      },
    });
    console.log(product);
    if (product) {
      await product.destroy();
      return {
        message: "Success,product deleted",
        data: product,
        error: false,
        status: 200,
      };
    } else {
      return {
        message: "Fail,product not found",
        status: 404,
        error: true,
        data: null,
      };
    }
  } catch (error) {
    return {
      message: "Bad request",
      status: 400,
      error: error,
      data: null,
    };
  }
};

module.exports = {
  store,
  get,
  getbyId,
  edit,
  destroy,
};
