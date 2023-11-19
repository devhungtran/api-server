const express = require("express");
const { getAllService, createService, findServiceByCode, deleteService } = require("../controller/ServiceController");
const { checkAuthenticationMDW } = require("../midlewares/checkAuthencation");
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
 *                 
 */

// // Add more routes as needed
// SERVICE
service.get('/get-all', getAllService)






/**
 * @swagger
 * /service/{code_service}:
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
 *                 
 */
  

service.get('/:code_service', findServiceByCode )






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
service.post('/create',checkAuthenticationMDW , createService)



/**
 * @swagger
 * /service/delete/{code_service}:
 * 
 *  delete:
 *      tags: [services]
 *      description: Delete service
 *      parameters:
 *        - in: path
 *          name: code_service
 *          schema:
 *              type: string
 *          required: true
 *          description: string id of service to delete
 *      responses:
 *          200:
 *              description: service that was deleted
 */
service.delete('/delete/:service_code', checkAuthenticationMDW, deleteService)


module.exports = service;