const express = require("express");
const { SignUp, SignIn } = require("../controller/AuthController");
const authRoutes = express.Router();



/**
 * @swagger
 * tags:
 *   name: authencation
 *   description: API for managing authencation
 */

/**
 * @swagger
 * /auth/signup:
 *   post:
 *  
 *     summary: Đăng kí tài khoản
 *     tags: [authencation]
 *     parameters:
 *       - name: email
 *         in: formData
 *         description: Địa chỉ email của người dùng
 *         required: true
 *         type: string
 *       - name: phone
 *         in: formData
 *         description: Số điện thoại của người dùng
 *         required: true
 *         type: string
 *       - name: username
 *         in: formData
 *         description: Tên đăng nhập của người dùng
 *         required: true
 *         type: string
 *       - name: password
 *         in: formData
 *         description: Mật khẩu của người dùng
 *         required: true
 *         type: string
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
 *                   email:
 *                     type: string
 *                     format: email
 *                     example: "user@example.com"
 *                   phone:
 *                     type: string
 *                     example: "1234567890"
 */

// Add more routes as needed



authRoutes.post('/signup', SignUp)

/**
 * @swagger
 * /auth/signin:
 *   post:
 *  
 *     summary: nhập tài khoản
 *     tags: [authencation]
 *     parameters:
 *       - name: email
 *         in: formData
 *         description: Địa chỉ email của người dùng
 *         required: true
 *         type: string
 *       - name: password
 *         in: formData
 *         description: Mật khẩu của người dùng
 *         required: true
 *         type: string
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
 *                   status:
 *                     status: boolean
 *                     example: "true"
 *                   message:
 *                     type: string
 *                     example: "Đăng nhập thành công"
 *                   token:
 *                     type: string
 *                
 *                     example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRldmh1bmd0cmFuIiwiZW1haWwiOiJkZXZodW5ndHJhbkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MDAyODY0NDIsImV4cCI6MTcwMjg3ODQ0Mn0.R6UwRNhm6ICcX27LkkawI6Vml_vvuVyeoN9_H73iG_E"
 *            
 */

// Add more routes as needed

authRoutes.post('/signin', SignIn)



module.exports = authRoutes;