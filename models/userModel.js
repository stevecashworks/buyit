import mongoose from "mongoose";

const userModel = mongoose.Schema({
  userName: {
    type: String,
    unique: true,
     
  },
  email: {
    type: String,
    unique: true,
  },
  password: String,
  userType: {
    type: String,
    enum: ["customer", "admin", "vendor"],
    default: "customer",
  },
  img: String,
  description: String,
});

const user_model=mongoose.model("users", userModel)


export default user_model;
