import createCustomError from "../../../createCustomError.js";
import cartModel from "../../../models/cartModel.js";


const  getAllCarts=async(req,res,next)=>{
try {
    const allCarts= await cartModel.find()
    res.status(200).json({success:true, result:allCarts})
} catch (error) {
    next(createCustomError(error.message))
}
}

export default getAllCarts