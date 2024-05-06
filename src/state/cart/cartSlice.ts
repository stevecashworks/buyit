import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type cartStateType={
    userId:string,
    products:{productId:string,quantity:number, name:string, price:number, img:string}[]
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
    setQuantity:(state,action)=>{
        state.clientCart={...state.clientCart,products:state.clientCart.products.map(product=>{
            if(product.productId==action.payload.id){
                return {...product, quantity:action.payload.quantity}
            }
            return product
        })}
    },
    removeFromCart:(state, action)=>{
        state.clientCart={...state.clientCart,products:state.clientCart.products.filter(product=>product.productId!==action.payload.id)}
    }

}})

export const {setDatabaseCart, setClientCart,setQuantity, removeFromCart} =cartSlice.actions
export const selectClientCart=(state:RootState)=>state.cart.clientCart
export const selectDatabaseCart=(state:RootState)=>state.cart.databaseCart
export default cartSlice.reducer



