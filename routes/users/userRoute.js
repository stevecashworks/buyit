import { Router } from "express";
import login from "./controllers/login.js";
import register from "./controllers/register.js";
import login_with_token from "./controllers/loginWithToken.js";
import { verify } from "./controllers/verify.js";
const userRoute = Router();

userRoute.post("/login", login);
userRoute.post("/register", register);
userRoute.post("/token",verify, login_with_token);

export default userRoute;
