import mongoose from "mongoose";

const orderSchema=mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["pending", "accepted", "rejected"],
        default:"pending"
    },
    products:[
        {productId:String, quantity:Number}
    ],
    price:{
        type:Number,
        required:true
    }
})
export default mongooose.model("orders",orderSchema)