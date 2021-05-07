// // import express from 'express'
// // import asyncHandler from 'express-async-handler'
// // const router = express.Router()
// // // const Product=express.Router()
// // import Product from '../models/productModel.js'


// // //@des fetch all products
// // //@route GET /api/products
// // //@acess Public 

// // router.get('/', asyncHandler (async (req, res) => {
// //     const products = await Product.find({})

// //     res.json(products)
// //   })
// // )
  
// // //@des fetch single products
// // //@route GET /api/products/:id
// // //@acess Public
// //   router.get('/:id',asyncHandler(async (req, res) => {
// //     const product = await Product.findById(req.params.id)

// //     if(product){
// //         res.json(product)
// //     }else{
// //         res.status(404).json({message: 'product not found'})
// //     }
    
// //   })
// //   )
  

// // export default router

// import express from 'express'
// import asyncHandler from 'express-async-handler'
// const router = express.Router()
// import Product from '../models/productModel.js'

// // @desc    Fetch all products
// // @route   GET /api/products
// // // @access  Public
// //  router.get(
// //    '/',(req, res) => {
    
// //     const products = (Product.find({}))

// //   res.json(products)

// //        })

//  router.get('/', asyncHandler (async (req, res) => {
//      const products = await Product.find({})

//      res.json(products)
//    })
//  )
  
//      //  const stringify = require('json-stringify-safe')
       
//        //   router.get('/', asyncHandler (async (req, res) => {
//   //   console.log(products)
//   //   res.json(products)
//   // }))
  
//   // asyncHandler(async (req, res) => {
  


// // @desc    Fetch single product
// // @route   GET /api/products/:id
// // @access  Public
// // router.get(
// //   '/:id',
// //   asyncHandler(async (req, res) => {
// //     const product = await Product.findById(req.params.id)

// //     if (product) {
// //       res.json.parse(product)
// //     } else {

// //       res.status(404)
// //       throw new  Error ('Product not found')
// //     }
// //   })
// // )
// // var o_id = new mongoose.ObjectID(product);
// // collection.update({'_id': :id});
// router.get(
//   '/:id',
//   asyncHandler(async (req, res) => {
//     const product = await Product.findById(req.params.id)

//     if (product) {
//       // res.productModel.ObjectId(product)
      
//       res.json(product)
      
//       console.log(product)
//     } else {
//       res.status(404)
//       throw new Error('Product not found')
//     }
//   })
// ) 


// export default router

import express from 'express';
const router = express.Router();
import { getProducts, getProductsById } from '../controllers/productController.js'


router.router('/').get(getProducts);

router.router('/:id').get(getProductsById);
export default router;