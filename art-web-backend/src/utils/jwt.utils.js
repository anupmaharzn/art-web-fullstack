const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const generateJwtToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};
const generateRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.REFRESH_SECRET, {
    expiresIn: process.env.JWT_REFRESH_EXPIRE,
  });
};

const validateToken = (token, secret) => {
  return jwt.verify(token, secret);
};

//aru thau maa change garna jhyau lagyo as of now so
//for forgot password
const generateToken = (payload, secret) => {
  return jwt.sign(payload, secret, {
    expiresIn: "15m",
  });
};
module.exports = {
  generateJwtToken,
  generateRefreshToken,
  validateToken,
  generateToken,
};
