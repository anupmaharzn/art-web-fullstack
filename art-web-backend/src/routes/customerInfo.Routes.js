const express = require("express");
const route = express.Router();
const customerInfoController = require("../controller/customer_info.Controlller");
const { isAuth } = require("../middleware/auth");
// route.put("/customer/:id", isAuth, upload, customerInfoController.edit);

/**
 * @swagger
 * tags:
 *    name:CustomerInfo
 *    description:CustomerInfo API
 */

/**
 * @swagger
 * /user/customers:
 *   get:
 *     summary: get all CustomerInfo
 *     tags: [CustomerInfo]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: all customer info .
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "all customer info "
 *       400:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "failed to get all customerinfo"
 *       404:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "failed to get all customerinfo"
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

route.get("/user/customers", isAuth, customerInfoController.get);

/**
 * @swagger
 * /user/customers/{id}:
 *   get:
 *     summary: get CustomerInfo by id
 *     tags: [CustomerInfo]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The customerinfo id
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: customer info by id
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "customer info by id"
 *       400:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "failed to get customerinfo by id"
 *       404:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "customer info not found"
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

route.get("/user/customers/:id", isAuth, customerInfoController.getbyId);

/**
 * @swagger
 * /user/customers/{id}:
 *   get:
 *     summary: get Customer order by customerinfo id
 *     tags: [CustomerInfo]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The customerinfo id
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: all order of particular customer
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "all order of particular customer"
 *       400:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "failed to get order by customerinfo by id"
 *       404:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "customer orders not found"
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

route.get(
  "/user/customer/:id/orders",
  isAuth,
  customerInfoController.getcustomerOrder
);

/**
 * @swagger
 * /user/customer/{id}:
 *   delete:
 *     summary: delete CustomerInfo by id
 *     tags: [CustomerInfo]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The customerinfo id
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: customerinfo deleted sucessfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "customerinfo deleted sucessfully"
 *       400:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "failed to delete customerinfo"
 *       404:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "customer info not found"
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

route.delete("/user/customer/:id", isAuth, customerInfoController.destroy);

//customer

/**
 * @swagger
 * tags:
 *    name:Public-CustomerInfo
 *    description:CustomerInfo API
 */

/**
 * @swagger
 * /public/customers/{id}:
 *   get:
 *     summary: get CustomerInfo by id
 *     tags: [Public-CustomerInfo]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The customerinfo id
 *     responses:
 *       200:
 *         description: customer info by id
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "customer info by id"
 *       400:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "failed to get customerinfo by id"
 *       404:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "customer info not found"
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

route.get("/public/customers/:id", customerInfoController.getbyId);

/**
 * @swagger
 * /public/customer/{id}/orders:
 *   get:
 *     summary: get Customer order by customerinfo id
 *     tags: [Public-CustomerInfo]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The customerinfo id
 *     responses:
 *       200:
 *         description: all order of particular customer
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "all order of particular customer"
 *       400:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "failed to get order by customerinfo by id"
 *       404:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "customer orders not found"
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

route.get(
  "/public/customer/:id/orders",
  customerInfoController.getcustomerOrder
);

module.exports = route;
