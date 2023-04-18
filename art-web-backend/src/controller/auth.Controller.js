const authServices = require("../services/auth.services");
const login = async (req, res) => {
  const result = await authServices.login(req.body);
  return res.status(result.status).send(result);
};

const changePassword = async (req, res) => {
  const result = await authServices.changePassword(req.user, req.body);
  return res.status(result.status).send(result);
};

const forgotPassword = async (req, res) => {
  const result = await authServices.forgotPassword(req.body);
  return res.status(result.status).send(result);
};

const getTokenUrl = async (req, res) => {
  const result = await authServices.getTokenUrl(
    req.params.id,
    req.params.token
  );
  return res.status(result.status).send(result);
};

const resetPassword = async (req, res) => {
  const result = await authServices.resetPassword(req.params, req.body);
  return res.status(result.status).send(result);
};

module.exports = {
  login,
  changePassword,
  forgotPassword,
  getTokenUrl,
  resetPassword,
};
