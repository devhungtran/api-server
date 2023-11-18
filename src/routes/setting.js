

const express = require("express");
const { getSetting, updateSetting } = require("../controller/SettingController");
const setting = express.Router();






 /**
  * @swagger
  * tags:
  *   name: setting
  *   description: API for managing system
  */

/**
 * @swagger
 * /setting/data:
 *   get:
 *     summary: Lấy thông tin hệ thống
 *     tags: [setting]
 *     responses:
 *       200:
 *         description: The list of the setting
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 
 */


setting.get('/data', getSetting)





/**
 * @swagger
 * /setting/update:
 *   put:
 *     summary: Lấy thông tin hệ thống
 *     tags: [setting]
 *     requestBody:
 *       required: true
*       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               newAppName:
 *                 type: string
 *                 description: Tên mới của ứng dụng
 *               newBanner:
 *                 type: string
 *                 description: URL mới của banner
 *               newFacebook_url:
 *                 type: string
 *                 description: URL mới của trang Facebook
 *               newEmail_contact:
 *                 type: string
 *                 description: Địa chỉ email mới liên hệ
 *               newPhone_contact:
 *                 type: string
 *                 description: Số điện thoại mới liên hệ
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
 *                   app_name:
 *                     type: string
 *                     description: Tên ứng dụng
 *                   banner:
 *                     type: string
 *                     description: URL của banner
 *                   facebook_url:
 *                     type: string
 *                     description: URL trang Facebook
 *                   email_contact:
 *                     type: string
 *                     description: Địa chỉ email liên hệ
 *                   phone_contact:
 *                     type: string
 *                     description: Số điện thoại liên hệ
 */

setting.put('/update', updateSetting)

module.exports = setting;


// requestBody:
// *       required: true
// *       content:
// *         application/json:
// *           schema:
// *             type: object
// *             properties:
// *               newAppName:
// *                 type: string
// *                 description: Tên mới của ứng dụng
// *               newBanner:
// *                 type: string
// *                 description: URL mới của banner
// *               newFacebook_url:
// *                 type: string
// *                 description: URL mới của trang Facebook
// *               newEmail_contact:
// *                 type: string
// *                 description: Địa chỉ email mới liên hệ
// *               newPhone_contact:
// *                 type: string
// *                 description: Số điện thoại mới liên hệ