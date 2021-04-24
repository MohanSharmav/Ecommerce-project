import mangoose from 'mongoose'

const userSchema = mangoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    },
    isAdmin:{
        type:Boolean,
        required: true,
        default:false
    },
  
    
},{
    timestamps:true,

})

const User=mongose.model('User',userSchema)

export default User