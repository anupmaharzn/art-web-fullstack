const { sendEmail } = require("../config/mail.config");
const { Order, Customer_info, Order_item } = require("../models");
const customerInfoServices = require("../services/customer_info.services");
const { updateQuantity } = require("../utils/apifeature");
const store = async (user, orderData) => {
  const customer = orderData["customer"];
  const orderItems = orderData["order_items"];

  try {
    const CustomerInfo = await customerInfoServices.store(customer);
    const Customer = CustomerInfo.data;

    let price = [];

    for (let key in orderItems) {
      let sum = 0;
      sum = orderItems[key]["quantity"] * orderItems[key]["price"];
      price.push(sum);
    }
    const shippingPrice = 125;
    const total = price.reduce((sum, initalvalue) => sum + initalvalue, 0);
    //grand total
    const GT = total + shippingPrice;

    const order = await Order.create({
      customer_info_id: Customer.id,
      totalprice: GT,
      order_status: "processing",
      order_date: new Date().toISOString(),
    });
    //each order item maa chai order id halyeko
    for (let key of orderItems) {
      key["order_id"] = order.id;
    }
    //then create orderitem
    const orderitems = await Order_item.bulkCreate(orderItems);

    if (order) {
      // if (user) {
      //   await sendEmail(user.email, orderItems, shippingPrice, total, GT);
      // }
      //public user ko email
      await sendEmail(Customer.email, orderItems, shippingPrice, total, GT);
      return {
        message: "Order created sucessfully",
        data: order,
        error: false,
        status: 201,
      };
    } else {
      return {
        message: "Order creation failed",
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

const get = async () => {
  try {
    const order = await Order.findAll({
      include: [
        {
          model: Order_item,
          as: "orderitem",
        },
      ],
    });
    if (order) {
      return {
        message: "Success",
        data: order,
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
    const order = await Order.findOne({
      where: {
        id: id,
      },
      include: [
        {
          model: Order_item,
          as: "orderitem",
        },
        {
          model: Customer_info,
          as: "customer_info",
        },
      ],
    });

    if (order) {
      return {
        message: "Success",
        data: order,
        error: false,
        status: 200,
      };
    } else {
      return {
        message: "Fail,specific order not found",
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
const edit = async (id, orderData) => {
  try {
    const order = await Order.findOne({
      where: {
        id: id,
      },
      include: {
        model: Order_item,
        as: "orderitem",
      },
    });
    console.log("edit order items", order.orderitem);
    console.log(orderData.order_status);
    if (orderData.order_status === "Delivered") {
      order.orderitem.forEach(async (odr) => {
        await updateQuantity(odr.product_id, odr.quantity);
      });
    }
    if (order) {
      order.customer_info_id =
        orderData.customer_info_id || order.customer_info_id;
      order.totalprice = orderData.totalprice || order.totalprice;
      order.order_status = orderData.order_status || order.order_status;
      order.order_date = orderData.order_date || order.order_date;

      await order.save();
      return {
        message: "Success,order updated",
        data: order,
        error: false,
        status: 200,
      };
    } else {
      return {
        message: "Fail,order not found",
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
const destroy = async (id) => {
  try {
    const order = await Order.findOne({
      where: {
        id: id,
      },
    });
    if (order) {
      await order.destroy();
      return {
        message: "Success,order deleted",
        data: order,
        error: false,
        status: 200,
      };
    } else {
      return {
        message: "Fail,order not found",
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
