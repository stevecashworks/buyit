import createCustomError from "../../../createCustomError.js";
import cartModel from "../../../models/cartModel.js";


const deleteCart=async(req,res,next)=>{

    try {
        const userId=req.user.id
        await cartModel.findOneAndDelete({userId})
        return res.status(200).json({success:true, result:"Cart deleted Successfully"})
    } catch (error) {
        next(createCustomError(error.message))
    }

}

export default deleteCart