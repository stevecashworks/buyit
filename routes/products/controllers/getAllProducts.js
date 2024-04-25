import createCustomError from "../../../createCustomError.js";
import productModel from "../../../models/productModel.js";

const getAllProducts=async(req,res,next)=>{
try {
    const allProducts=await productModel.find()
    return res.status(200).json({success:true, result:allProducts})
} catch (error) {
    next(createCustomError(error.message))
}
}
export default getAllProducts