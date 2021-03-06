import mongoose from 'mongoose'

var connectDB = async() =>{
    try{
        const conn= await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
            useCreateIndex:true
        })
        console.log(`MongoDB connected : ${conn.connection.host}`)
    }
    catch(error)
    {
        console.log(`Error: ${error.message}`)
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB