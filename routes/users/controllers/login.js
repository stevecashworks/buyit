import { config } from "dotenv";
import createCustomError from "../../../createCustomError.js";
import userModel from "../../../models/userModel.js";
import jwt from "jsonwebtoken";
config();
const login = async (req, res, next) => {
  try {
    const { userName } = req.body;
    const reqPassword = req.body.password;
    const thisUser = await userModel.findOne({ userName });
    if (!thisUser) {
      return res
        .status(404)
        .json({ success: false, result: "Incorrect login details" });
    } else {
      const db_password = thisUser.password;
      const password_is_correct = reqPassword === db_password;
      if (!password_is_correct) {
        return res
          .status(403)
          .json({ success: false, result: "Incorrect login details" });
      } else {
        const token = await jwt.sign({
          id: thisUser._id,
          userType: thisUser.userType,
        }, process.env.jwt_pass);
        const { password, ...others } = thisUser;
        res.status(200).json({ success: true, result: { others, token } });
      }
    }
  } catch (error) {
    next(createCustomError(error.message));
  }
};

export default login;
