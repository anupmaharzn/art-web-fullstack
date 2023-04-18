const orderServices = require("../services/order.services");

const store = async (req, res) => {
  const result = await orderServices.store(req.user, req.body);
  return res.status(result.status).send(result);
};

const get = async (req, res) => {
  const result = await orderServices.get();
  return res.status(result.status).send(result);
};
const getbyId = async (req, res) => {
  const result = await orderServices.getbyId(req.params.id);
  return res.status(result.status).send(result);
};
const edit = async (req, res) => {
  const orderData = {
    customer_info_id: req.body.customer_info_id,
    totalprice: req.body.totalprice,
    order_status: req.body.order_status,
    order_date: req.body.order_data,
  };
  const result = await orderServices.edit(req.params.id, orderData);
  return res.status(result.status).send(result);
};
const destroy = async (req, res) => {
  const result = await orderServices.destroy(req.params.id);
  return res.status(result.status).send(result);
};
module.exports = {
  store,
  get,
  getbyId,
  edit,
  destroy,
};
