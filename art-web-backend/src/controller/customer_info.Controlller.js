const customerInfoServices = require("../services/customer_info.services");

const store = async (req, res) => {
  const customerData = {
    name: req.body.name,
    email:req.body.email,
    address: req.body.address,
    contact_no: req.body.contact_no,
    city: req.body.city,
    country: req.body.country,
    postal_code: req.body.postal_code,
  };
  const result = await customerInfoServices.store(customerData);
  return res.status(result.status).send(result);
};

const get = async (req, res) => {
  const result = await customerInfoServices.get();
  return res.status(result.status).send(result);
};
const getbyId = async (req, res) => {
  const result = await customerInfoServices.getbyId(req.params.id);
  return res.status(result.status).send(result);
};

const getcustomerOrder = async (req, res) => {
  const result = await customerInfoServices.getcustomerOrder(req.params.id);
  return res.status(result.status).send(result);
};
// const edit = async (req, res) => {
//   const customerData = {
//     name: req.body.name,
//     address: req.body.address,
//     contact_no: req.body.contact_no,
//     city: req.body.city,
//     postal_code: req.body.postal_code,
//     country: req.body.country,
//   };
//   const result = await customerInfoServices.edit(req.params.id, customerData);
//   return res.status(result.status).send(result);
// };
const destroy = async (req, res) => {
  const result = await customerInfoServices.destroy(req.params.id);
  return res.status(result.status).send(result);
};
module.exports = {
  store,
  get,
  getbyId,
  //   edit,
  destroy,
  getcustomerOrder,
};
