import { Router } from "express";
import addProduct from "./controllers/addProduct.js";
import delete_product from "./controllers/deleteProduct.js"
import editProduct from "./controllers/editProduct.js";
import { verifyVendor } from "../users/controllers/verify.js";
import getAllProducts from "./controllers/getAllProducts.js";
import get_single_product from "./controllers/getSingleProduct.js";

const productRoute= Router()
productRoute.post("/new",verifyVendor, addProduct)
productRoute.post("/delete/:id",delete_product )
productRoute.post("/edit/:id",editProduct )
productRoute.get("/all", getAllProducts )
productRoute.get("/:id", get_single_product )

export default productRoute