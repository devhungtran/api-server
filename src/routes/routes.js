const { models } = require('mongoose');
const swagerdocj = require('swagger-jsdoc')
const swagger = require('swagger-ui-express')
require('dotenv').config()
const { GetAllProduct, GetProductByMaSP } = require('../controller/ProductController');
const { ProductModel } = require('../model/ProductModel');
const { getAllService, createService, deleteService } = require('../controller/ServiceController');
const { ServiceModel } = require('../model/ServiceModel');
const { SignUp, SignIn } = require('../controller/AuthController');
const { getAllBranch, createBranch } = require('../controller/BranchController');
const { generateCodeDiscount } = require('../controller/CodeDiscountController');
const { getAlllUser } = require('../controller/UserController');
const { checkAdmin, checkAuthenticationMDW } = require('../midlewares/checkAuthencation');

const route = require('express').Router();




/**
 * @swagger
 * components:
 *   schemas:
 *     Books:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - finished
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The title of your book
 *         description:
 *           type: string
 *           description: The book explanation
 *         published:
 *           type: boolean
 *           description: Whether you have finished reading the book
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the book was added
 *     
 */
/**
 * @swagger
 * tags:
 *   name: Books
 *   description: The books managing API
 * /book:
 *   get:
 *     summary: Lists all the books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Books'
 *   post:
 *     summary: Create a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Books'
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Books'
 *       500:
 *         description: Some server error
 * /book/{id}:
 *   get:
 *     summary: Get the book by id
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *     responses:
 *       200:
 *         description: The book response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Books'
 *       404:
 *         description: The book was not found
 *   put:
 *    summary: Update the book by the id
 *    tags: [Books]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The book id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Books'
 *    responses:
 *      200:
 *        description: The book was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Books'
 *      404:
 *        description: The book was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the book by id
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *
 *     responses:
 *       200:
 *         description: The book was deleted
 *       404:
 *         description: The book was not found
 */



const options =  {
   definition: {
     openapi: "3.0.0",
     info: { 
       "title": "Spa Booking  api documents",
       "version": "1.0.0",
       "description": "Api server app spa booking backend width expressjs",
       contact:  {
         name: "devhungtran",
         url : "dev",
         email: "devhungtran@gmail.com"
       }
     },
     
     servers: [
       {
         url: process.env.HOST,
       }
     ]
   },
   apis: ["./*.js"]
 }
 const spacs = swagerdocj(options)
 route.use("/api-documents", swagger.serve, swagger.setup(spacs))


route.get('/',(req,res) =>{
   res.redirect('/api-documents');
})

// API
// AUTHENCATION
route.post('/auth/signup', SignUp)
route.post('/auth/signin', SignIn)




// SẢN PHẨM

route.get('/product/get-all', GetAllProduct)
route.get('/get-prodcut/:masp', GetProductByMaSP)



// CHI NHÁNH
route.get('/branch/get-all', getAllBranch)
route.post('/branch/create', createBranch)

// mã giảm giá



//


// SERVICE
route.get('/service/get-all', getAllService)
route.post('/service/create', createService)
route.delete('/service/delete', deleteService)


// người dùng

route.get('/user/get-all' ,checkAuthenticationMDW, getAlllUser )






module.exports = { route }