const categoryServices = require("../services/categroy.services");

const store = async (req, res) => {
  const result = await categoryServices.store(req.body);
  return res.status(result.status).send(result);
};
const get = async (req, res) => {
  const result = await categoryServices.get();
  return res.status(result.status).send(result);
};
const getbyId = async (req, res) => {
  const result = await categoryServices.getbyId(req.params);
  return res.status(result.status).send(result);
};
const edit = async (req, res) => {
  const result = await categoryServices.edit(req.params.id, req.body.name);
  return res.status(result.status).send(result);
};
const destroy = async (req, res) => {
  const result = await categoryServices.destroy(req.params.id);
  return res.status(result.status).send(result);
};

module.exports = {
  store,
  get,
  getbyId,
  edit,
  destroy,
};
