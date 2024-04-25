import createCustomError from "../../../createCustomError.js";
import userModel from "../../../models/userModel.js";
import cartModel from "../../../models/cartModel.js"
import jwt from "jsonwebtoken"
const register = async (req, res, next) => {
  try {
    const newUser = new userModel(req.body);
    await newUser.save()
    await cartModel.create({userId:newUser._id})
    const token= await jwt.sign({id:newUser._id, userType:newUser.userType}, process.env.jwt_pass)
    
    res.status(201).json({ success: true, result: {...newUser._doc,token} });
  } catch (error) {
    next(createCustomError(error.message));
  }
};
export default register;
