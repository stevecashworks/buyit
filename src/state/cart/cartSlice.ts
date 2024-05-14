import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type cartStateType={
    userId:string,
    products:{productId:string,quantity:number, name:string, price:number, img:string}[]
}
type initialStateType={
    cart_has_loaded:boolean;
    databaseCart:cartStateType,
    clientCart:cartStateType

}

const initialState: initialStateType= {
    cart_has_loaded:false,
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
    loadCart:(state)=>{
        state.cart_has_loaded=true
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

export const {setDatabaseCart, setClientCart,setQuantity, removeFromCart, loadCart} =cartSlice.actions
export const selectClientCart=(state:RootState)=>state.cart.clientCart
export const selectDatabaseCart=(state:RootState)=>state.cart.databaseCart
export const select_cart_has_loaded= (state:RootState)=>state.cart.cart_has_loaded
export default cartSlice.reducer



