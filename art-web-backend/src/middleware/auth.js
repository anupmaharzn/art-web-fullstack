const { validateToken } = require("../utils/jwt.utils");
const dotenv = require("dotenv");
dotenv.config();

const isAuth = async (req, res, next) => {
  let token;
  //console.log(req.headers.authorization);
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      //console.log(token);
      const decoded = validateToken(token, process.env.JWT_SECRET);
      // console.log(decoded);
      req.user = decoded;
      next();
    } catch (error) {
      return res.send(error);
    }
  }
  if (!token) {
    res.status(401).send({
      message: "Not authorized,No token",
    });
  }
};

module.exports = { isAuth };
