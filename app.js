import { config } from "dotenv"
import express from "express"
import connect_db from "./connect_db.js"
import cors from "cors"
import userRoute from "./routes/users/userRoute.js"
import error_handler from "./errorHandler.js"
import productRoute from "./routes/products/productRoute.js"
import cartRoute from "./routes/carts/cartRoute.js"
config()


const  server=express()


// accept json input
server.use(express.json())


// allow cross-platform origins
server.use(cors())

// use environment port if available
const port= process.env.port||5000

//  render payment key

server.get("/payments",(req,res,next)=>{
    try {
        const payStack_key=  process.env.paystack_key
        res.status(200).json({success:true, result:payStack_key})
    } catch (error) {
        return res.status(500).json({success:false, result:error.message})
    }
})

// routes start
server.use("/users",userRoute)
server.use("/products",productRoute)
server.use("/cart",cartRoute)




// routes end


//  handle errors
server.use(error_handler)

const startServer=async()=>{
    try {
        await connect_db(process.env.mongo_uri)
        console.log("done")
        server.listen(port, () => {
            console.log(`server is listening on port : ${port}`);
        });        
    } catch (error) {
        console.log(error.message)
    }
}
startServer()

