const express = require("express");
const route = express.Router();
const orderController = require("../controller/order.Controller");
const { isAuth } = require("../middleware/auth");
const { ordervalidatorRules } = require("../validator/order-validator-rules");
const { validateMiddleware } = require("../middleware/validator.middleware");

/**
 * @swagger
 * tags:
 *   name: Order
 *   description: order API
 */

/**
 * @swagger
 * /user/order/{id}:
 *   put:
 *     summary: edit Order
 *     tags: [Order]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The order id
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer:
 *                type: object
 *                properties:
 *                  customer_info_id:
 *                    type: string
 *                    required: true
 *                  totalprice:
 *                    type: number
 *                    required: true
 *                  order_status:
 *                    type: string
 *                    required: true
 *                  order_date:
 *                    type: string
 *                    required: true

 *     responses:
 *       200:
 *         description: Order deleted sucessfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Order deleted sucessfully."
 *       400:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "Order delete failed"
 *       404:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "Order delete failed"
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

route.put("/user/order/:id", isAuth, orderController.edit);

/**
 * @swagger
 * tags:
 *   name: Order
 *   description: order API
 */

/**
 * @swagger
 * /user/order/{id}:
 *   delete:
 *     summary: delete Order
 *     tags: [Order]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The order id
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer:
 *                type: object
 *                properties:
 *                  customer_info_id:
 *                    type: string
 *                    required: true
 *                  totalprice:
 *                    type: number
 *                    required: true
 *                  order_status:
 *                    type: string
 *                    required: true
 *                  order_date:
 *                    type: string
 *                    required: true

 *     responses:
 *       200:
 *         description: Order deleted sucessfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Order deleted sucessfully."
 *       400:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "Order edit failed"
 *       404:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "Order creation failed"
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

route.delete("/user/order/:id", isAuth, orderController.destroy);

/**
 * @swagger
 * /user/orders:
 *   get:
 *     summary: get all Order
 *     tags: [Order]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: all orders.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "all orders"
 *       400:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "fail to get all orders"
 *       404:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "fail to get all orders"
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

route.get("/user/orders", isAuth, orderController.get);

/**
 * @swagger
 * tags:
 *   name: Order
 *   description: order API
 */

/**
 * @swagger
 * /user/order/{id}:
 *   get:
 *     summary: get single Order
 *     tags: [Order]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The order id
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: a single order.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "single order"
 *       400:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "fail to get single"
 *       404:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "fail to get single"
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

route.get("/user/order/:id", isAuth, orderController.getbyId);

/**
 * @swagger
 * tags:
 *   name: Order
 *   description: order API
 */

/**
 * @swagger
 * /user/order:
 *   post:
 *     summary: create new Order
 *     tags: [Order]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer:
 *                type: object
 *                properties:
 *                  name:
 *                    type: string
 *                    required: true
 *                  address:
 *                    type: string
 *                    required: true
 *                  contact_no:
 *                    type: number
 *                    required: true
 *                  city:
 *                    type: string
 *                    required: true
 *                  country:
 *                    type: string
 *                    required: true
 *                  postal_code:
 *                    type: number
 *                    required: true
 *               order_items:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    product_id:
 *                      type: number
 *                      required: true
 *                    name:
 *                      type: string
 *                      required: true
 *                    quantity:
 *                      type: number
 *                      required: true
 *                    price:
 *                      type: number
 *                      required: true
 *     responses:
 *       200:
 *         description: Order created sucessfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Order created sucessfully."
 *       400:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "Order creation failed"
 *       404:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "Order creation failed"
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
  "/user/order",
  isAuth,
  ordervalidatorRules(),
  validateMiddleware,
  orderController.store
);
//customer

/**
 * @swagger
 * tags:
 *   name: Public-Order
 *   description: order API
 */

/**
 * @swagger
 * /public/order:
 *   post:
 *     summary: create new Order
 *     tags: [Public-Order]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer:
 *                type: object
 *                properties:
 *                  name:
 *                    type: string
 *                    required: true
 *                  email:
 *                    type: string
 *                    required: true
 *                  address:
 *                    type: string
 *                    required: true
 *                  contact_no:
 *                    type: number
 *                    required: true
 *                  city:
 *                    type: string
 *                    required: true
 *                  country:
 *                    type: string
 *                    required: true
 *                  postal_code:
 *                    type: number
 *                    required: true
 *               order_items:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    product_id:
 *                      type: number
 *                      required: true
 *                    name:
 *                      type: string
 *                      required: true
 *                    quantity:
 *                      type: number
 *                      required: true
 *                    price:
 *                      type: number
 *                      required: true
 *     responses:
 *       200:
 *         description: Order created sucessfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Order created sucessfully."
 *       400:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "Order creation failed"
 *       404:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "Order creation failed"
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
  "/public/order",
  ordervalidatorRules(),
  validateMiddleware,
  orderController.store
);

/**
 * @swagger
 * /public/order/{id}:
 *   get:
 *     summary: get single Order
 *     tags: [Public-Order]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The order id
 *     responses:
 *       200:
 *         description: a single order.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "single order"
 *       400:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "fail to get single"
 *       404:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "fail to get single"
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

route.get("/public/order/:id",  orderController.getbyId);


module.exports = route;
