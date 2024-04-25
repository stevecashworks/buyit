import productModel from "../../../models/productModel.js";
const editProduct=async(req,res,next)=>{
try {
    const {id} =req.params
  const editedProduct= await productModel.findByIdAndUpdate(id,{$set:req.body},{new:true})
  return res.status(201).json({success:true, result:editedProduct})   
} catch (error) {
    next(createCustomeError(error))
}
}
export default editProduct