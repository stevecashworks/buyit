import createCustomError from "../../../createCustomError.js"
import productModel from "../../../models/productModel.js"

const delete_product=async(req,res,next)=>{
 const {id}= req.params
    try {
     await productModel.findByIdAndDelete()
 } catch (error) {
    next(createCustomError(error.messsage))
 }
}
export default delete_product