const express = require("express");
const { getAlllUser } = require("../controller/UserController");
const user = express.Router();





// /**
//  * @swagger
//  * tags:
//  *   name: user
//  *   description: API for managing users
//  */

// /**
//  * @swagger
//  * /user:
//  *   post:
//  *  
//  *     summary: Đăng kí tài khoản
//  *     tags: [user]
//  *     parameters:
//  *       - name: email
//  *         in: formData
//  *         description: Địa chỉ email của người dùng
//  *         required: true
//  *         type: string
//  *       - name: phone
//  *         in: formData
//  *         description: Số điện thoại của người dùng
//  *         required: true
//  *         type: string
//  *       - name: username
//  *         in: formData
//  *         description: Tên đăng nhập của người dùng
//  *         required: true
//  *         type: string
//  *       - name: password
//  *         in: formData
//  *         description: Mật khẩu của người dùng
//  *         required: true
//  *         type: string
//  *     responses:
//  *       200:
//  *         description: Successful operation
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 type: object
//  *                 properties:
//  *                   id:
//  *                     type: string
//  *                     example: "1"
//  *                   username:
//  *                     type: string
//  *                     example: "john_doe"
//  *                   email:
//  *                     type: string
//  *                     format: email
//  *                     example: "user@example.com"
//  *                   phone:
//  *                     type: string
//  *                     example: "1234567890"
//  */

// // Add more routes as needed
user.get('/product/get-all', getAlllUser)



module.exports = user;