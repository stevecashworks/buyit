import { Router } from "express";
import editCart from "./controllers/editCart.js";
import deleteCart from "./controllers/deleteCart.js";
import getAllCarts from "./controllers/getAllCarts.js";
import getCart from "./controllers/getCart.js";
import { verify, verifyAdmin } from "../users/controllers/verify.js";
import addToCart from "./controllers/addToCart.js";
const cartRoute=Router()
cartRoute.post("/edit",verify, editCart)
cartRoute.post("/delete",verify, deleteCart)
cartRoute.post("/addproduct",verify, addToCart)
cartRoute.post("/all",verifyAdmin, getAllCarts)
cartRoute.post("/viewCart",verify, getCart)



export default cartRoute