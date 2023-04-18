const express = require("express");
const route = express.Router();
const aboutProductController = require("../controller/about_product.Controller");

const {
  aboutProductvalidatorRules,
} = require("../validator/aboutProduct-validator-rules");

const { validateMiddleware } = require("../middleware/validator.middleware");

const { isAuth } = require("../middleware/auth");

/**
 * @swagger
 * tags:
 *   name: About-Product
 *   description: About Product API
 */

/**
 * @swagger
 * /user/about-product:
 *   post:
 *     summary: create new about-product
 *     tags: [About-Product]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               material:
 *                 type: string
 *                 required: true
 *               size:
 *                 type: string
 *                 required: true
 *               rarity:
 *                 type: string
 *                 required: true
 *               condition:
 *                 type: string
 *                 required: true
 *               signature:
 *                 type: string
 *                 required: true
 *               COA:
 *                 type: string
 *                 required: true
 *               frame:
 *                 type: string
 *                 required: true
 *               product_id:
 *                 type: number
 *                 required: true
 *     responses:
 *       200:
 *         description: about-product created sucessfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "about-product created sucessfully."
 *       400:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "about-product creation failed"
 *       404:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "about-product creation failed"
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "internal server in error"
 */

route.post(
  "/user/about-product",
  isAuth,
  aboutProductvalidatorRules(),
  validateMiddleware,
  aboutProductController.store
);

/**
 * @swagger
 * /user/about-products:
 *   get:
 *     summary: get all about-product
 *     tags: [About-Product]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: all about-product .
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "all about-product ."
 *       400:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "fail to get all about-product"
 *       404:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "fail to get all about-product"
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "internal server in error"
 */

route.get("/user/about-products", isAuth, aboutProductController.get);

/**
 * @swagger
 * /user/about-product/{id}:
 *   get:
 *     summary: single about-product
 *     tags: [About-Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The about-product id
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: single about-product .
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "single about-product ."
 *       400:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "fail to get single about-product"
 *       404:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "fail to get single about-product"
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "internal server in error"
 */

route.get("/user/about-product/:id", isAuth, aboutProductController.getbyId);

/**
 * @swagger
 * /user/about-product/{id}:
 *   put:
 *     summary: edit about-product
 *     tags: [About-Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The about-product id
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               material:
 *                 type: string
 *                 required: true
 *               size:
 *                 type: string
 *                 required: true
 *               rarity:
 *                 type: string
 *                 required: true
 *               condition:
 *                 type: string
 *                 required: true
 *               signature:
 *                 type: string
 *                 required: true
 *               COA:
 *                 type: string
 *                 required: true
 *               frame:
 *                 type: string
 *                 required: true
 *               product_id:
 *                 type: number
 *                 required: true
 *     responses:
 *       200:
 *         description: about-product edited sucessfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "about-product edited sucessfully."
 *       400:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "about-product edit failed"
 *       404:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "about-product edit failed"
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "internal server in error"
 */

route.put("/user/about-product/:id", isAuth, aboutProductController.edit);

/**
 * @swagger
 * /user/about-product/{id}:
 *   delete:
 *     summary: delete about-product
 *     tags: [About-Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The about-product id
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: about-product deleted sucessfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "about-product deleted sucessfully."
 *       400:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "about-product delete failed"
 *       404:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "about-product delete failed"
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "internal server in error"
 */

route.delete("/user/about-product/:id", isAuth, aboutProductController.destroy);
//customer
/**
 * @swagger
 * tags:
 *   name: Public-About-Product
 *   description: About Product API
 */

/**
 * @swagger
 * /public/about-products:
 *   get:
 *     summary: all about-product
 *     tags: [Public-About-Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The about-product id
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: get all about-product .
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "get all about-product ."
 *       400:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "fail to get all about-product"
 *       404:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "fail to get all about-product"
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "internal server in error"
 */

route.get("/public/about-products", aboutProductController.get);

/**
 * @swagger
 * /public/about-product/{id}:
 *   get:
 *     summary: single about-product
 *     tags: [Public-About-Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The about-product id
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: single about-product .
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "single about-product ."
 *       400:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "fail to get single about-product"
 *       404:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "fail to get single about-product"
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "internal server in error"
 */

route.get("/public/about-product/:id", aboutProductController.getbyId);

module.exports = route;
