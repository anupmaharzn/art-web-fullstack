"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("about_products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      material: {
        type: Sequelize.STRING,
      },
      size: {
        type: Sequelize.STRING,
      },
      rarity: {
        type: Sequelize.STRING,
      },
      condition: {
        type: Sequelize.STRING,
      },
      signature: {
        type: Sequelize.STRING,
      },
      COA: {
        type: Sequelize.STRING,
      },
      frame: {
        type: Sequelize.STRING,
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "products",
          },
          key: "id",
        },
        onDelete: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("about_products");
  },
};
