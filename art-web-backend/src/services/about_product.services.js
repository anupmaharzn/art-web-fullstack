const { About_product } = require("../models");

const store = async (aboutProductData) => {
  try {
    const aboutProduct = await About_product.create(aboutProductData);
    if (aboutProduct) {
      return {
        message: "created sucessfully",
        data: aboutProduct,
        error: false,
        status: 201,
      };
    } else {
      return {
        message: "creation failed",
        data: null,
        error: true,
        status: 400,
      };
    }
  } catch (error) {
    return {
      message: "Bad request",
      error: true,
      status: 404,
    };
  }
};
const get = async () => {
  try {
    const aboutProduct = await About_product.findAll();
    if (aboutProduct) {
      return {
        message: "success",
        data: aboutProduct,
        error: false,
        status: 201,
      };
    } else {
      return {
        message: "fail to get about products",
        data: null,
        error: true,
        status: 400,
      };
    }
  } catch (error) {
    return {
      message: "Bad request",
      error: true,
      status: 404,
    };
  }
};

const getbyId = async (id) => {
  try {
    const aboutProduct = await About_product.findOne({
      where: {
        id: id,
      },
    });
    if (aboutProduct) {
      return {
        message: "sucess",
        data: aboutProduct,
        error: false,
        status: 201,
      };
    } else {
      return {
        message: "fail,about product detail not found",
        data: null,
        error: true,
        status: 404,
      };
    }
  } catch (error) {
    return {
      message: "Bad request",
      error: true,
      status: 404,
    };
  }
};

const edit = async (id, aboutProductData) => {
  try {
    const aboutProduct = await About_product.findOne({
      where: {
        id: id,
      },
    });

    if (aboutProduct) {
      aboutProduct.material =
        aboutProductData.material || aboutProduct.material;
      aboutProduct.size = aboutProductData.size || aboutProduct.size;
      aboutProduct.rarity = aboutProductData.rarity || aboutProduct.rarity;
      aboutProduct.condition =
        aboutProductData.condition || aboutProduct.condition;
      aboutProduct.signature =
        aboutProductData.signature || aboutProduct.signature;
      aboutProduct.COA = aboutProductData.COA || aboutProduct.COA;
      aboutProduct.frame = aboutProductData.frame || aboutProduct.frame;
      aboutProduct.product_id =
        aboutProductData.product_id || aboutProduct.product_id;
      await aboutProduct.save();

      return {
        message: "Success,aboutproduct updated",
        data: aboutProduct,
        error: false,
        status: 200,
      };
    } else {
      return {
        message: "Fail,aboutproduct not found",
        status: 404,
        error: true,
        data: null,
      };
    }
  } catch (error) {
    return {
      message: "Bad request",
      error: error,
      status: 400,
    };
  }
};

const destroy = async (id) => {
  try {
    const aboutProduct = await About_product.findOne({
      where: {
        id: id,
      },
    });

    if (aboutProduct) {
      await aboutProduct.destroy();
      return {
        message: "success,aboutProduct deleted",
        data: aboutProduct,
        error: false,
        status: 200,
      };
    } else {
      return {
        message: "fail,aboutProduct not found",
        data: null,
        error: true,
        status: 404,
      };
    }
  } catch (error) {
    return {
      message: "Bad Request",
      error: true,
      status: 404,
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
