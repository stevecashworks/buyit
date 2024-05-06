import { createSlice } from "@reduxjs/toolkit";
import { productProps } from "../../pages/home/components/productcard/productCard";
import { RootState } from "../store";

type initialStateType= {
    products:productProps[]
}
const initialState:initialStateType={
    products:[]
}
const productSlice=createSlice({name:"products", initialState, reducers:{
    setProducts:(state, action)=>{
            state.products= action.payload
    }
}})
export  const {setProducts}= productSlice.actions
export const selectProducts= (state:RootState)=>state.products.products
export default productSlice.reducer