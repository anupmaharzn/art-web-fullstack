const { User } = require("../models");
require("dotenv").config();
const { passwordResetEmail } = require("../config/mail.config");
const {
  generateJwtToken,
  generateRefreshToken,
  generateToken,
  validateToken,
} = require("../utils/jwt.utils");
const { comparePassword, encryptPassword } = require("../utils/bcrypt");

const login = async ({ email, password }) => {
  if (!(email && password)) {
    return {
      message: "all input is required",
      error: true,
      status: 400,
    };
  }
  try {
    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!user) {
      return {
        message: "Invalid email or password",
        error: true,
        status: 400,
      };
    }

    const comparepassword = await comparePassword(password, user.password);

    if (!comparepassword) {
      return {
        message: "Invalid email or password",
        error: true,
        status: 401,
      };
    }
    if (user && comparepassword) {
      const token = await generateJwtToken({
        id: user.id,
        email: user.email,
      });
      const refreshToken = await generateRefreshToken({
        id: user.id,
        email: user.email,
      });

      return {
        message: "Login sucessful",
        data: {
          email:user.email,
          name:user.name,
          token,
          refreshToken,
        },
        error: false,
        status: 200,
      };
    } else {
      return {
        message: "Invalid credentails,login unsucessful",
        error: true,
        status: 400,
        data: null,
      };
    }
  } catch (error) {
    return {
      message: "Bad request",
      error: true,
      status: 400,
    };
  }
};

const changePassword = async (user, userData) => {
  const { id, email } = user;
  const { oldPassword, newPassword, confirmPassword } = userData;
  try {
    const user = await User.findOne({
      where: {
        email: email,
      },
    });
    const comparepassword = await comparePassword(oldPassword, user.password);

    if (!comparepassword) {
      return {
        message: "oldPassword doesnot match",
        error: true,
        status: 401,
      };
    }
    const compareandconfirmPassword = newPassword === confirmPassword;
    if (!compareandconfirmPassword) {
      return {
        message: "New password and confirm password should match",
        error: true,
        status: 401,
      };
    }

    const newHashPassword = encryptPassword(newPassword);

    if (comparepassword && compareandconfirmPassword) {
      user.password = newHashPassword;

      await user.save();

      return {
        message: "password changed sucessfully",
        error: false,
        status: 200,
      };
    }
  } catch (error) {
    return {
      message: "Bad request",
      error: true,
      status: 400,
    };
  }
};

const forgotPassword = async ({ email }) => {
  console.log(email)
  try {
    const user = await User.findOne({
      where: {
        email: email,
      },
    });
    if (!user) {
      return {
        message: "User not registered",
        error: true,
        status: 404,
      };
    }
    //if user exist then
    //generate secrect using user password that exist in DB
    const secret = process.env.JWT_SECRET + user.password;
    const payload = {
      id: user.id,
      email: user.email,
    };
    const resetToken = await generateToken(payload, secret);

    const resetPasswordUrl = `${process.env.FRONTEND_URL}/password/reset/${user.id}/${resetToken}`;

    const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\n If you have not requested this email then please ignore it `;

    //send email to user's email
    await passwordResetEmail({
      email: user.email,
      subject: "ART WEB Password Recovery",
      message: message,
    });
    return {
      message: `Email sent to ${user.email} successfully`,
      error: false,
      status: 200,
    };
  } catch (error) {
    return {
      message: "Bad request",
      error: true,
      status: 400,
    };
  }
};
const getTokenUrl = async (id, token) => {
  try {
    //getting the user with id
    const user = await User.findOne({
      where: {
        id: id,
      },
    });
    if (!user) {
      return {
        message: "User with particular id not found",
        error: true,
        status: 404,
      };
    }
    //secret with password coz if password change then fail the validate
    //means one time link jasto vayo even if expiry time baki xa
    const secrect = process.env.JWT_SECRET + user.password;
    const payload = await validateToken(token, secrect);

    if (payload) {
      return {
        message: `Link still Valid`,
        error: false,
        status: 200,
      };
    } else {
      return {
        message: `Link is expired or Link Already used`,
        error: true,
        status: 400,
      };
    }
  } catch (error) {
    return {
      message: "Bad request or Link is invalid or Link Already used",
      error: true,
      status: 400,
    };
  }
};

const resetPassword = async (params, body) => {
  const { id, token } = params;
  const { newPassword, confirmPassword } = body;

  try {
    //getting the user with id and validating
    const user = await User.findOne({
      where: {
        id: id,
      },
    });
    if (!user) {
      return {
        message: "User with particular id not found",
        error: true,
        status: 404,
      };
    }

    const secrect = process.env.JWT_SECRET + user.password;
    const payload = await validateToken(token, secrect);

    if (payload) {
      //validate password
      if (!(newPassword && confirmPassword)) {
        return {
          message: "all field is required",
          error: true,
          status: 400,
        };
      }
      const compareandconfirmPassword = newPassword === confirmPassword;
      if (!compareandconfirmPassword) {
        return {
          message: "New password and confirm password should match",
          error: true,
          status: 401,
        };
      }
      if (compareandconfirmPassword) {
        //hashing the new passowrd
        const newHashPassword = encryptPassword(newPassword);
        user.password = newHashPassword;

        await user.save();

        return {
          message: "password reset sucessfully",
          error: false,
          status: 200,
        };
      }
    } else {
      return {
        message: `Link is expired or Link Already used`,
        error: true,
        status: 400,
      };
    }
  } catch (error) {
    return {
      message: "Bad request or Link is invalid or Link Already used",
      error: true,
      status: 400,
    };
  }
};
module.exports = {
  login,
  changePassword,
  forgotPassword,
  getTokenUrl,
  resetPassword,
};
