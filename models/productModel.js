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
    colors:{
     type:[],
     required:true   
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
    },
    rating:{
        type:Number,
        default:4.5
    },
   mileage :{
                type:String

    },
    categories:{
            type:[],
            default:[]
    }
})
export default  mongoose.model("products", productSchema)