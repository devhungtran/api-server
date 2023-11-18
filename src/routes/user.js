const express = require("express");
const { getAlllUser } = require("../controller/UserController");
const user = express.Router();




/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - title
 *         - author
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The book title
 *         author:
 *           type: string
 *           description: The book author
 *       example:
 *         id: d5fE_asz
 *         title: The New Turing Omnibus
 *         author: devhungtran
 */

 /**
  * @swagger
  * tags:
  *   name: users
  *   description: Quản lý người dùng
  */


/**
 * @swagger
 * /user/get-all:
 *   get:
 *     summary: Returns the list of all the Users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of the Users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */

// // Add more routes as needed
user.get('/get-all', getAlllUser)



module.exports = user;