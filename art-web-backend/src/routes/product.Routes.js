const express = require("express");
const route = express.Router();
const productController = require("../controller/product.Controller.js");

const {
  productvalidatorRules,
} = require("../validator/product-validator-rules");

const { validateMiddleware } = require("../middleware/validator.middleware");
const { upload } = require("../middleware/fileupload");
const { isAuth } = require("../middleware/auth");

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - theme
 *         - description
 *         - price
 *         - category_id
 *         - quantity
 *         - image
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the category
 *         name:
 *           type: string
 *           description: Product name
 *         theme:
 *           type: string
 *           description: theme of product
 *         price:
 *           type: price
 *           description: product price
 *         category_id:
 *           type: string
 *           description: categroy of product
 *         quantity:
 *           type: string
 *           description: quantity of product
 *         image:
 *           type: string
 *           description: image of product
 *       example:
 *         name: "oil panting"
 */

/**
 * @swagger
 * tags:
 *   name: Product
 *   description: Product API
 */

/**
 * @swagger
 * /user/product/new:
 *   post:
 *     summary: create new product
 *     tags: [Product]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 required: true
 *               theme:
 *                 type: string
 *                 required: true
 *               description:
 *                 type: string
 *                 required: true
 *               price:
 *                 type: number
 *                 required: true
 *               category_id:
 *                 type: number
 *                 required: true
 *               quantity:
 *                 type: number
 *                 required: true
 *               image:
 *                 type: string
 *                 format: binary
 *                 required: true
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

 *     responses:
 *       200:
 *         description: product created sucessfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "product created sucessfully."
 *       400:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "product creation failed"
 *       404:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "product creation failed"
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
  "/user/product/new",
  isAuth,
  upload,
  productvalidatorRules(),
  validateMiddleware,
  productController.store
);

/**
 * @swagger
 * /user/product/{id}:
 *   put:
 *     summary: update product
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product id
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 required: true
 *               theme:
 *                 type: string
 *                 required: true
 *               description:
 *                 type: string
 *                 required: true
 *               price:
 *                 type: number
 *                 required: true
 *               category_id:
 *                 type: number
 *                 required: true
 *               quantity:
 *                 type: number
 *                 required: true
 *               image:
 *                 type: string
 *                 format: binary
 *                 required: true
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

 *     responses:
 *       200:
 *         description: product updated sucessfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "product updated sucessfully."
 *       400:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "product update failed"
 *       404:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "product update failed"
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

route.put("/user/product/:id", isAuth, upload, productController.edit);

/**
 * @swagger
 * /user/product/{id}:
 *   delete:
 *     summary: delete product
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product id
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: product deleted sucessfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "product deleted sucessfully."
 *       400:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "product delete failed"
 *       404:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "product delete failed"
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

route.delete("/user/product/:id", isAuth, productController.destroy);

/**
 * @swagger
 * /user/products:
 *   get:
 *     summary: get products
 *     tags: [Product]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: product by id.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "product by id."
 *       400:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "fail to get products"
 *       404:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "fail to get products"
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

route.get("/user/products", isAuth, productController.get);

/**
 * @swagger
 * /user/products/{id}:
 *   get:
 *     summary: get product by id
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The product id
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: product by id.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "product by id."
 *       400:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "fail to get product by id"
 *       404:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "fail to get product by id"
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
route.get("/user/products/:id", isAuth, productController.getbyId);
// //for customers

/**
 * @swagger
 * tags:
 *   name: Public-Product
 *   description: Public Product API
 */

/**
 * @swagger
 * /public/products:
 *   get:
 *     summary: get products
 *     tags: [Public-Product]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: number for pagination
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: search text
 *     responses:
 *       200:
 *         description: all products.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "all products"
 *       400:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "fail to get products"
 *       404:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "fail to get products"
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

route.get("/public/products", productController.get);

/**
 * @swagger
 * /public/products/{id}:
 *   get:
 *     summary: get product by id
 *     tags: [Public-Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product id
 *     responses:
 *       200:
 *         description: product by id.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "product by id."
 *       400:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "fail to get product by id"
 *       404:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "fail to get product by id"
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
route.get("/public/products/:id", productController.getbyId);

module.exports = route;
