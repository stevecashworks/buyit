import { config } from "dotenv"
import jwt from "jsonwebtoken"
config()

//  verifies a user on a basic level
export const verify=async(req,res,next)=>{
 const {token}= req.headers
    await jwt.verify(token, process.env.jwt_pass,(err,user)=>{
        if(err){
            return res.status(500).json({success:false,result:err.message})
        }
        else{
            req.user=user
            next()
        }
    })

}

//  Verify a user type to allocate vendor priviledges
export const verifyVendor=async(req,res,next)=>{
    try{
        const {token}=req.headers;
        await jwt.verify(token,process.env.jwt_pass,(err,user)=>{
            if(err){
                return res.status(500).json({success:false,result:err.message})
            }
            else{
                const {userType}=user
                const user_is_a_vendor=userType==="vendor"
                if(user_is_a_vendor){
                    req.user=user;
                    next()
                }
                else{
                    return res.status(403).json({success:false,result:"You must be a vendor to be granted permission"})
                }
            }
        })


    }catch(error){
            return res.status(500).json({success:false, result:error.messagw})
    }
}



//  Verify a user type to allocate admin priviledges
export const verifyAdmin=async(req,res,next)=>{
    try{
        const {token}=req.headers;
        await jwt.verify(token,process.env.jwt_pass,(err,user)=>{
            if(err){
                return res.status(500).json({success:false,result:err.message})
            }
            else{
                const {userType}=user
                const user_is_a_vendor=userType==="admin"
                if(user_is_a_vendor){
                    req.user=user;
                    next()
                }
                else{
                    return res.status(403).json({success:false,result:"You must be a vendor to be granted permission"})
                }
            }
        })


    }catch(error){
            return res.status(500).json({success:false, result:error.messagw})
    }
}