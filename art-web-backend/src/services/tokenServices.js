const { generateJwtToken, validateToken } = require("../utils/jwt.utils");

const generateToken = async (refreshToken) => {
  try {
    const decoded = validateToken(refreshToken, process.env.REFRESH_SECRET);
    if (decoded) {
      return {
        data: {
          token: generateJwtToken({ id: decoded.id, email: decoded.email }),
        },
        status: 200,
        error: false,
        message: "Generate Succcessfully",
      };
    } else {
      return {
        status: 400,
        error: true,
        message: "Please Login again to continue",
      };
    }
  } catch (error) {
    return {
      status: 400,
      error: true,
      message: "Bad Request ",
    };
  }
};

module.exports = { generateToken };
