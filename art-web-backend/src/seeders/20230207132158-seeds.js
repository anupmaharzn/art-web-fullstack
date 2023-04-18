"use strict";

require("dotenv").config();
const { User } = require("../models");
const bcryt = require("bcrypt");
const salt = bcryt.genSaltSync(10);
const PASSWORD = bcryt.hashSync(process.env.password, salt);
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Anup Maharjan",
          email: "Anup.Maharjan@gmail.com",
          password: PASSWORD,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
