const { Category } = require("../models");

const store = async ({ name }) => {
  try {
    const category = await Category.create({ name });
    if (category) {
      return {
        message: "category created sucessfully",
        data: category,
        error: false,
        status: 201,
      };
    } else {
      return {
        message: "category creation failed",
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
    const category = await Category.findAll({
      // attributes: ["id", "name"],
    });
    if (category) {
      return {
        message: "all category",
        data: category,
        error: false,
        status: 200,
      };
    } else {
      return {
        message: "fail to get all category",
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
const getbyId = async ({ id }) => {
  try {
    const category = await Category.findOne({
      attributes: ["name"],
      where: {
        id: id,
      },
    });
    if (category) {
      return {
        message: "single category",
        data: category,
        error: false,
        status: 200,
      };
    } else {
      return {
        message: "fail to get one category",
        data: null,
        error: true,
        status: 400,
      };
    }
  } catch (error) {
    return {
      message: "Bad request",
      data: null,
      error: true,
      status: 404,
    };
  }
};

const edit = async (id, name) => {
  try {
    const category = await Category.findOne({
      where: {
        id: id,
      },
    });

    if (category) {
      category.name = name || category.name;
      await category.save();
      return {
        message: " category edited sucessfully",
        data: category,
        error: false,
        status: 200,
      };
    } else {
      return {
        message: "Category not found",
        data: null,
        error: true,
        status: 400,
      };
    }
  } catch (error) {
    return {
      message: "Bad request",
      data: null,
      error: true,
      status: 404,
    };
  }
};

const destroy = async (id) => {
  try {
    const category = await Category.findOne({
      where: {
        id: id,
      },
    });

    if (category) {
      await category.destroy();
      return {
        message: " category deleted sucessfully",
        data: category,
        error: false,
        status: 200,
      };
    } else {
      return {
        message: "Category not found",
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

module.exports = {
  store,
  get,
  getbyId,
  edit,
  destroy,
};
