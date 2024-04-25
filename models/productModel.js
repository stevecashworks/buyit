import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    stock:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        default:"No description was provided for this product"
    },
    price:{
        type:Number,
        required:true
    },
    vendor:{
        type:String,
        required:true
    },

    img:{
            type:String,
            required:true
    },
    otherImages:{
        type:[],
        default:[]
    }
})
export default  mongoose.model("products", productSchema)