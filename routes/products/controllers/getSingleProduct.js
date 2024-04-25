import createCustomError from "../../../createCustomError.js";
import productModel from "../../../models/productModel.js";

const get_single_product=async(req,res,next)=>{
 try {
    const {id}= req.params
    const this_product= await productModel.findById(id)
    return req.status(200).json({success:true,result:this_product})
 } catch (error) {
    next(createCustomError(error.message))
 }
}
export default get_single_product