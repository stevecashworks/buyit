import createCustomError from "../../../createCustomError.js";
import cartModel from "../../../models/cartModel.js";


const editCart=async(req,res,next)=>{
try {
    const  userId=req.user.id
    const updatedCart= await cartModel.findOneAndUpdate({userId},{$set:req.body}, {new:true})
    res.status(200).json({success:true, result:updatedCart})
    
} catch (error) {
    next(createCustomError(error.message))
}
}

export default editCart