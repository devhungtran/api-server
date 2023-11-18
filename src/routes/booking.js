const express = require("express");
const { getAllBooking, createBooking, cancelBooking, getCommingBooking, findBookingByUser } = require("../controller/BookingController");
const {  checkAdmin } = require("../midlewares/checkAuthencation");

const booking = express.Router();



 /**
  * @swagger
  * tags:
  *   name: bookings
  *   description: API for managing bookings
  */

/**
 * @swagger
 * /booking/get-all:
 *   get:
 *     summary: Lấy tất cả booking
 *     tags: [bookings]
 *     responses:
 *       200:
 *         description: The list of the bookings
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Service'
 */



// get tất cả
booking.get('/get-all',  checkAdmin ,getAllBooking ) 

/**
 * @swagger
 * /booking/find/{user_booking}:
 *   get:
 *     summary: Lấy booking của người dùng
 *     tags: [bookings]
 *     parameters:
 *       - in: path
 *         name: user_booking
 *         schema:
 *           type: string
 *         required: true
 *         description: Tên tài khoản cần kiểm tra
 *     responses:
 *       200:
 *         description: 
 *         contens:
 *           application/json:
 *          
 *       500:
 *         description: Người dùng chưa đặt lịch
 */


// lịch sắp tới
booking.get('/find/:user_booking',  checkAdmin ,findBookingByUser ) 



/**
 * @swagger
 * /booking/get-comming:
 *   get:
 *     summary: Lấy các booking chưa làm sắp đến và sắp xếp theo thời gian  
 *     tags: [bookings]
 *     responses:
 *       200:
 *         description: The list of the bookings
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Service'
 */


booking.get('/get-comming', checkAdmin,  getCommingBooking)





booking.post('/create', checkAdmin, createBooking)







/**
 * @swagger
 * /booking/cancel:
 *   put:
 *     summary: Hủy đặt lịch
 *     tags: [bookings]
 *     requestBody:
 *       required: true
*       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code_booking:
 *                 type: string
 *                 description: Mã booking
 *             
 *     responses:
 *       200:
 *         description: The list of the setting
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                 
 */



booking.put('/cancel/:booking_code', checkAdmin, cancelBooking)




module.exports = booking;   