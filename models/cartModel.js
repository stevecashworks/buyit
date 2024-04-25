import mongoose from "mongoose";


const cartSchema= mongoose.Schema({
    userId:{
        type:String,
    },
    products:{
        type:[{productId:String, quantity:Number}],
        default:[]
    }
},{timestamps:true})
export default mongoose.model("carts", cartSchema )