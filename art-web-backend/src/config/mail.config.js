const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const Mailgen = require("mailgen");
dotenv.config();

const EMAIL = process.env.EMAIL;
const MAILPASSWORD = process.env.MAILPASSWORD;

//for orderplace
const sendEmail = async (userEmail, orderData, shippingPrice, total, GT) => {
  try {
    let config = {
      service: "gmail",
      auth: {
        user: EMAIL,
        pass: MAILPASSWORD,
      },
    };
    let transporter = nodemailer.createTransport(config);
    let mailGenerator = new Mailgen({
      theme: "default",
      product: {
        name: "Mailgen",
        link: "https://mailgen.js",
      },
    });
    let response = {
      body: {
        name: "ART APP",
        intro: "Your order is placed!",
        table: {
          data: orderData,
        },
        dictionary: {
          ShippingPrice: shippingPrice,
          Total: `Rs ${total}`,
          GrossTotal: `Rs ${GT}`,
        },
        outro: "Looking forward to do more business",
      },
    };
    let mail = mailGenerator.generate(response);
    let message = {
      from: EMAIL, // sender address
      to: userEmail, // list of receivers
      subject: "Place order", // Subject line
      html: mail, // html body //yesma we can use templating
    };
    transporter.sendMail(message);
  } catch (error) {
    return error;
  }
};

const passwordResetEmail = async (options) => {
  try {
    let config = {
      service: "gmail",
      auth: {
        user: EMAIL,
        pass: MAILPASSWORD,
      },
    };
    let transporter = nodemailer.createTransport(config);

    let message = {
      from: EMAIL, // sender address
      to: options.email, // list of receivers
      subject: options.subject, // Subject line
      text: options.message, //body line
    };
    transporter.sendMail(message);
  } catch (error) {
    return error;
  }
};

module.exports = {
  sendEmail,
  passwordResetEmail,
};
