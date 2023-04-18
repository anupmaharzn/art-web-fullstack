const { Customer_info, Order, Order_item } = require("../models");

const store = async (Customer_infoData) => {
  console.log('customer ifno bata',Customer_infoData);
  try {
    const Customer = await Customer_info.create(Customer_infoData);
    console.log(Customer,"CustomerCustomerCustomer");
    
    if (Customer) {
      return {
        message: "Customer_info created sucessfully",
        data: Customer,
        error: false,
        status: 201,
      };
    } else {
      return {
        message: "Customer_info creation failed",
        status: 400,
        error: true,
        data: null,
      };
    }
  } catch (error) {
    console.log(error,"errorerrorerror");
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
    const Customer = await Customer_info.findAll();
    if (Customer) {
      return {
        message: "Success",
        data: Customer,
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
    const Customer = await Customer_info.findOne({
      where: {
        id: id,
      },
    });
    if (Customer) {
      return {
        message: "Success",
        data: Customer,
        error: false,
        status: 200,
      };
    } else {
      return {
        message: "Fail,could not find customer",
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
const getcustomerOrder = async (id) => {
  try {
    const Customer = await Customer_info.findOne({
      where: {
        id: id,
      },
      include: [
        {
          model: Order,
          as: "Orders",
          include: [
            {
              model: Order_item,
              as: "orderitem",
            },
          ],
        },
      ],
    });
    if (Customer) {
      return {
        message: "Success",
        data: Customer,
        error: false,
        status: 200,
      };
    } else {
      return {
        message: "Fail,could not find orders of particular customer",
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
// const edit = async (id, Customer_infodata) => {
//   try {
//     const Customer = await Customer_info.findOne({
//       where: {
//         id: id,
//       },
//     });
//     if (Customer) {
//       Customer.name = Customer_infodata.name || Customer.name;
//       Customer.address = Customer_infodata.address || Customer.address;
//       Customer.contact_no = Customer_infodata.contact_no || Customer.contact_no;
//       Customer.city = Customer_infodata.city || Customer.city;
//       Customer.postal_code =
//         Customer_infodata.postal_code || Customer.postal_code;
//       Customer.country = Customer_infodata.country || Customer.country;

//       await Customer.save();
//       return {
//         message: "Success,Customer_info updated",
//         data: Customer,
//         error: false,
//         status: 200,
//       };
//     } else {
//       return {
//         message: "Fail,Customer_info not found",
//         status: 404,
//         error: true,
//         data: null,
//       };
//     }
//   } catch (error) {
//     return {
//       message: "Bad request",
//       status: 400,
//       error: error,
//       data: null,
//     };
//   }
// };
const destroy = async (id) => {
  try {
    const Customer = await Customer_info.findOne({
      where: {
        id: id,
      },
    });

    if (Customer) {
      await Customer.destroy();
      return {
        message: "Success,Customer_info deleted",
        data: Customer,
        error: false,
        status: 200,
      };
    } else {
      return {
        message: "Fail,Customer_info not found",
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
  getcustomerOrder,
  //   edit,
  destroy,
};
