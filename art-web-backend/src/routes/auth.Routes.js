const express = require("express");
const route = express.Router();
const authController = require("../controller/auth.Controller");
const { loginvalidatorRules } = require("../validator/login-validator-rules");
const {
  changePasswordvalidatorRules,
} = require("../validator/changePassword-validator-rules");
const { validateMiddleware } = require("../middleware/validator.middleware");
const { isAuth } = require("../middleware/auth");
/**
 * @swagger
 * components:
 *   schemas:
 *     Login:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: email
 *           description: user email address
 *         password:
 *           type: string
 *           description: user password
 *       example:
 *         email: "abcD@gmail.com"
 *         password: "12345678"
 */

/**
 * @swagger
 * tags:
 *   name: AUTH
 *   description: AUTH API
 */
/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login a user
 *     tags: [AUTH]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 required: true
 *               password:
 *                 type: string
 *                 required: true
 *     responses:
 *       200:
 *         description: Logged In Succcessful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Logeed in successfully"
 *       400:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "Invalid email or password"
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
route.post(
  "/auth/login",
  loginvalidatorRules(),
  validateMiddleware,
  authController.login
);

/**
 * @swagger
 * /auth/changepassword:
 *   patch:
 *     summary: Change password
 *     tags: [AUTH]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               oldPassword:
 *                 type: string
 *                 required: true
 *               newPassword:
 *                 type: string
 *                 required: true
 *               confirmPassword:
 *                 type: string
 *                 required: true
 *     responses:
 *       200:
 *         description: .
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Password changed sucessfully"
 *       401:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "old password doesnot match"
 *       400:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "Fail to change password"
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "internal server error"
 */

route.patch(
  "/auth/changePassword",
  isAuth,
  changePasswordvalidatorRules(),
  validateMiddleware,
  authController.changePassword
);

/**
 * @swagger
 * /auth/password/forgot:
 *   post:
 *     summary: Forget password
 *     tags: [AUTH]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 required: true
 *     responses:
 *       200:
 *         description: Email sent to {email} successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Email sent to {email} successfully."
 *       400:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "User not registered"
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "User not registered"
 */

route.post("/auth/password/forgot", authController.forgotPassword);

/**
 * @swagger
 * /auth/password/reset/{id}/{token}:
 *   get:
 *     summary: get reset password (checking)
 *     tags: [AUTH]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: user id
 *       - in: path
 *         name: token
 *         schema:
 *           type: string
 *         required: true
 *         description: jwt token
 *     responses:
 *       200:
 *         description: link is still valid.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Bad request or Link is invalid or Link Already used."
 *       400:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "Bad request or Link is invalid or Link Already used"
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "User not registered"
 */
route.get(`/auth/password/reset/:id/:token`, authController.getTokenUrl);

/**
 * @swagger
 * /auth/password/reset/{id}/{token}:
 *   put:
 *     summary: Reset password
 *     tags: [AUTH]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: user id
 *       - in: path
 *         name: token
 *         schema:
 *           type: string
 *         required: true
 *         description: jwt token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               newPassword:
 *                 type: string
 *                 required: true
 *               confirmPassword:
 *                 type: string
 *                 required: true
 *     responses:
 *       200:
 *         description: .
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Password reset sucessfully"
 *       400:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "Bad request or Link is invalid or Link Already used"
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "internal server error"
 */

route.put(`/auth/password/reset/:id/:token`, authController.resetPassword);
module.exports = route;
