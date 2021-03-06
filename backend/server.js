
import  dotenv from 'dotenv'

import express from 'express'
// import colors from 'colors'
import connectDB  from './config/db.js'
const router = express.Router()
import {notFound,errorHandler} from './middleware/errorMiddleware.js'

import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()

connectDB()
const app=express()

// app.use((req,res,next) =>{
// console.log(req.originalUrl)
// next()
// })

app.use(express.json())

app.get('/',  (req, res) =>  {
  res.send('Api is jas')
})

app.use('/api/products',productRoutes)
app.use('/api/users',userRoutes)

app.use(notFound)

app.use(errorHandler) 

const PORT =process.env.PORT || 5000
app.listen(PORT, console.log(`Server  running in ${process.env.NODE_ENV} mode on port ${PORT}`))