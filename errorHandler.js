const error_handler=(err,req,res,next)=>{
    try{
        console.log(err.message)
        return res.status(err.code).json({success:false, result:err.message})
    }
    catch(error){
        return res.status(500).json({success:false, result:error.message})
    }
}
export default error_handler