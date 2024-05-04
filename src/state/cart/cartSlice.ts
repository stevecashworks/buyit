import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type cartStateType={
    userId:string,
    products:{productId:string,quantity:number}[]
}
type initialStateType={
    databaseCart:cartStateType,
    clientCart:cartStateType

}

const initialState: initialStateType= {
    databaseCart:{
        userId:"",
        products:[]

    },
    clientCart:{
        userId:"",
        products:[]

    }

}

const cartSlice=createSlice({initialState,name:"cart",reducers:{
    setDatabaseCart:(state, action)=>{
        state.databaseCart.userId=action.payload.userId
        state.databaseCart.products=action.payload.products
    },
    setClientCart:(state, action)=>{
        state.clientCart.userId=action.payload.userId
        state.clientCart.products=action.payload.products
    },

}})

export const {setDatabaseCart, setClientCart} =cartSlice.actions
export const selectClientCart=(state:RootState)=>state.cart.clientCart
export const selectDatabaseCart=(state:RootState)=>state.cart.databaseCart
export default cartSlice.reducer



