import createCustomError from "../../../createCustomError.js";
import cartModel from "../../../models/cartModel.js";


const getCart=async(req,res,next)=>{
    try {
        const userId=req.user.id
        const myCart= cartModel.findOne({userId})
        return res.status(200).json({success:true, result:myCart})
    } catch (error) {
        next(createCustomError(error.message))
    }
}

export default getCart