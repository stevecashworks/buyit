import { Router } from "express";
import login from "./controllers/login.js";
import register from "./controllers/register.js";
const userRoute = Router();

userRoute.post("/login", login);
userRoute.post("/register", register);

export default userRoute;
