import { Router } from "express";
import editCart from "./controllers/editCart.js";
import deleteCart from "./controllers/deleteCart.js";
import getAllCarts from "./controllers/getAllCarts.js";
import getCart from "./controllers/getCart.js";
import { verify, verifyAdmin } from "../users/controllers/verify.js";
const cartRoute=Router()
cartRoute.post("/edit",verify, editCart)
cartRoute.post("/delete",verify, deleteCart)
cartRoute.post("/all", getAllCarts)
cartRoute.post("/viewCart",verifyAdmin, getCart)



export default cartRoute