import mangoose, { Mongoose } from 'mongoose'

const orderSchema = mangoose.Schema({
    user:{
        type:mangoose.Schema.Types.ObjectId,
        required: true,
        ref:'User'
    },
    oderItems:[
        {
            name:{tye:String, required:true},
            qty:{tye:Number, required:true},
            image:{tye:String, required:true},
            Price:{tye:Number, required:true},
            product:{
                type:Mongoose.Schema.Types.ObjectId,
                required:true,
                ref:'Products'
            }
        }  
    ],
    shippingAddress:{
        address:{type:String ,required:true},
        city:{type:String ,required:true},
        postalCode:{type:String ,required:true},
        countrty:{type:String ,required:true}
    },
    paymentMethod:{
        type:String,
        required: true,
    },
    paymentResult:{
        id:{type:String},
        status:{type:String},
        update_time:{type:String},
        email_address :{type:String},
    },
    taxPrice:{
        type:Number,
        required: true,
        default:0.0
    },
    shippingPrice:{
        type:Number,
        required: true,
        default:0.0
    },
    totalPrice:{
        type:Number,
        required: true,
        default:0.0
    },
    isPaid:{
        type:Boolean,
        required: true,
        default:false
    },
    paidAt:{
        type:Date
    },
    isDelivered:{
        type:Boolean,
        required: true,
        default:false        
    },
    dilveredAt:{
        type:Date
    },
    
},{
    timestamps:true,

})

const Order=mongose.model('Order',orderSchema)

export default Order