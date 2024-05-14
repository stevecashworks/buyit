import { createSlice } from "@reduxjs/toolkit";
import { productProps } from "../../pages/home/components/productcard/productCard";
import { RootState } from "../store";

type initialStateType= {
    products:productProps[],
    products_have_loaded:boolean
}
const initialState:initialStateType={
    products:[],
    products_have_loaded:false
}
const productSlice=createSlice({name:"products", initialState, reducers:{
    setProducts:(state, action)=>{
            state.products= action.payload
    },
    loadProducts:(state)=>{
        state.products_have_loaded=true
    }
}})
export  const {setProducts, loadProducts}= productSlice.actions
export const selectProducts= (state:RootState)=>state.products.products
export const select_products_have_loaded=(state:RootState)=>state.products.products_have_loaded
export default productSlice.reducer