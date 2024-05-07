import mongoose from "mongoose";


const cartSchema= mongoose.Schema({
    userId:{
        type:String,
    },
    products:{
        type:[{productId:String, quantity:Number,price:Number,img:String, name:String}],
        default:[]
    }
},{timestamps:true})
export default mongoose.model("carts", cartSchema )