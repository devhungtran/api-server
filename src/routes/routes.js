
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
const service = require('./service');
const booking = require('./booking');

const route = require('express').Router();



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
// dịch vụ
route.use('/service', service)
// người dùng

route.get('/user/get-all' ,checkAuthenticationMDW, getAlllUser )
// đặt lịch

route.use('/booking', booking)


module.exports = { route } 