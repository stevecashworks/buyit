import productModel from "../../../models/productModel";

const getVendorPropducts=async(req,res,next)=>{
try {
    const userId= req.user.id
    const vendorProducts= await productModel.find({vendor:userId})
    return res.status(200).json({success:true, result:vendorProducts})
    
} catch (error) {
   next(createCustomError(error.message)) 
}
}
export default getVendorPropducts