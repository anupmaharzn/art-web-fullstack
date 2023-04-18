const tokenServices = require("../services//tokenServices");

const generateToken = async (req, res) => {
  const result = await tokenServices.generateToken(req.body.refreshToken);
  return res.status(result.status).send(result);
};

module.exports = { generateToken };
