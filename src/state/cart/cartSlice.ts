import { createSlice } from "@reduxjs/toolkit";

type cartStateType={
    userId:string,
    products:{productId:string,quantity:number}[]
}

const initialState:cartStateType= {
    userId:"",
    products:[]

}

const cartSlice=createSlice({initialState,name:"cart",reducers:{
    setCart:(state, action)=>{
        state.userId=action.payload.userId
        state.products=action.payload.products
    }
}})

export const {setCart} =cartSlice.actions
export default cartSlice.reducer



