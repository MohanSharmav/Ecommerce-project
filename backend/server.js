    // const express = require('express')
    // //const products=required('./data/products')
    // const app =express()

// app.get('/  ',(req, res) => {
//     res.send("API is running")
// })

// app.get('/api/products',(req,res)=>{
//     res.json{products}
// })
//import express from 'express'
//var app = express()
//import express from 'express'
import  dotenv from 'dotenv'
import products from './data/products.js'
import express from 'express'
//const port = 5001

dotenv.config()

// respond with "hello world" when a GET request is made to the homepage
app.get('/',  (req, res) =>  {
  res.send('Api is jas')
})


app.get('/api/products', function (req, res) {
  res.json(products)
})


app.get('/api/products/:id', function (req, res) {
  const product=products.find((p) => p._id === req.params.id)
  res.json(product)
})

const PORT =process.env.PORT || 5001
app.listen(PORT, console.log(`Server  running in ${process.env.NODE_ENV} mode on port ${PORT}`))