import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
    name:{type:String, required:true},
    rating:{type:Number, required:true},
    comment:{type:String, required:true},
},{
    timestamps:true
})

const productSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        require:true,
        ref:'User'
    },
    image:{
        type:String,
        required: true
    },
    brand:{
        type:String,
        required: true,
        unique: false
    },
    catergory:{
        type:String,
        required:false,
    
    },
    description:{
        type:String,
        required: true,
    }, 
    review:[reviewSchema],

    rating:{
        type:Number,
        required: true,
        default:0
    
    },
    numReviews:{
        type:Number,
        required: true,
        default:0
    },
    price:{
        type:Number,
        required: true,
        default:0
    
    },
    countInstock:{
        type:Number,
        required: true,
        default:0
    
    },
    isAdmin:{
        type:Boolean,
        required: true,
        default:false
    },
  
    
},{
    timestamps:true,

})

const Product=mongoose.model('Product',productSchema)

export default Product