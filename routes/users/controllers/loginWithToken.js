import createCustomError from "../../../createCustomError.js";
import user_model from "../../../models/userModel.js";
const login_with_token=async(req,res,next)=>{
    try {
        const {id}= req.user
        const thisUser= await user_model.findById(id)

        if(thisUser){
            return  res.status(200).json({success:true, result:thisUser})
        }
        else{
            return res.status(404).json({ success: false, result: "Unable to fetch user details" });

        }
        
    } catch (error) {
        next(createCustomError(error.message))
    }
}
export default login_with_token