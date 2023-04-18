const express = require("express");
const route = express.Router();
const tokenController = require("../controller/token.Controller");
const { isAuth } = require("../middleware/auth");

/**
 * @swagger
 * components:
 *   schemas:
 *     Token:
 *       type: object
 *       required:
 *         - refreshtoken
 *         - password
 *       properties:
 *         refreshtoken:
 *           type: string
 *           description: token key
 *       example:
 *         refreshtoken: "qwertyuiio.asdfghjkl.zxcvbnm"
 */

/**
 * @swagger
 * tags:
 *   name: AUTH
 *   description: AUTH API
 */
/**
 * @swagger
 * /auth/generate-token:
 *   post:
 *     summary: generate refresh token
 *     tags: [AUTH]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               refreshToken:
 *                 type: string
 *                 required: true
 *     responses:
 *       200:
 *         description: Generate Succcessfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Generate Succcessfully"
 *       400:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "Please Login again to continue"
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "Logeed in error"
 */

route.post("/auth/generate-token", tokenController.generateToken);

module.exports = route;
