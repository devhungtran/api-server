const express = require("express");
const { getAllService, createService } = require("../controller/ServiceController");
const service = express.Router();



 /**
  * @swagger
  * tags:
  *   name: services
  *   description: API for managing services
  */

/**
 * @swagger
 * components:
 *   schemas:
 *     Service:
 *       type: object
 *       required:
 *         - name_service
 *         - price
 *       properties:
 *         name_service:
 *           type: string
 *           description: The auto-generated id of the service
 *         price:
 *           type: string
 *           description: Gía tiền sản phẩm
 *         description:
 *           type: string
 *           description: Mô tả sản phẩm
 *       example:
 *         status: true
 *         message: get all service successfully !!!
 *         data: [{}]
 */

/**
 * @swagger
 * /service/get-all:
 *   get:
 *     summary: Lấy tất cả dịch vụ
 *     tags: [services]
 *     responses:
 *       200:
 *         description: The list of the Services
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Service'
 */

// // Add more routes as needed
// SERVICE
service.get('/get-all', getAllService)


/**
 * @swagger
 * /service/create:
 *   post:
 *     summary: Tạo thêm dịch vụ
 *     tags: [services]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: Dịch vụ đã tồn tại
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       500:
 *         description: Some server error
 */
service.post('/create', createService)
// route.delete('/service/delete', deleteService)


module.exports = service;