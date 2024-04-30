import createCustomError from "../../../createCustomError.js"
import productModel from "../../../models/productModel.js"
const addProduct=async(req,res,next)=>{
    const id=req.user.id
    try{
        const newProduct=await productModel.create({...req.body, vendor:id})
        res.status(200).json({success:true,result:newProduct})
    }
    catch(error){
        next(createCustomError(error.message))
    }
}
export default addProduct