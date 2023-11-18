
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
const authRoutes = require('./auth');

const route = require('express').Router();



// routes.js


route.use('/auth', authRoutes)

route.get('/',(req,res) =>{
   res.redirect('/api-documents');
})

// API
// AUTHENCATION



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