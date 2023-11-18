const express = require("express");
const { getAllBooking } = require("../controller/BookingController");
const { checkAuthenticationMDW } = require("../midlewares/checkAuthencation");

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




booking.get('/get-all',  checkAuthenticationMDW ,getAllBooking ) 





module.exports = booking;   