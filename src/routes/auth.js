const express = require("express");
const { SignUp, SignIn } = require("../controller/AuthController");
const authRoutes = express.Router();




/**
 * @swagger
 * tags:
 *   name: auth
 *   description: API for managing users
 */

/**
 * @swagger
 * /signup:
 *   post:
 *  
 *     summary: Đăng kí tài khoản
 *     tags: [auth]
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "1"
 *                   username:
 *                     type: string
 *                     example: "john_doe"
 */

// Add more routes as needed



authRoutes.post('/signup', SignUp)
authRoutes.post('/signin', SignIn)



module.exports = authRoutes;