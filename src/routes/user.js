const express = require("express");
const { getAlllUser } = require("../controller/UserController");
const { checkAdmin } = require("../midlewares/checkAuthencation");
const user = express.Router();



/**
 * @swagger
 * tags:
 *   name: users
 *   description: API for managing users
 */

/**
 * @swagger
 * /user/get-all:
 *   get:
 *     summary: Returns the list of all the Users
 *     tags: [users]
 *     security:
 *       - JWT: []  # Use the defined security definition
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         description: Token for authentication
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The list of the Users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */


// // Add more routes as needed
user.get('/get-all', checkAdmin , getAlllUser)








module.exports = user;