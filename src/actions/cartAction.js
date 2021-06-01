import {PRODUCT_CART_ADD,PRODUCT_CART_REMOVE, SHEEPING_ADD} from '../constant/cartConstrain'
import store from '../store'
import cookie from "js-cookie"


export  const addtocart=(data,id,count)=> async (dispatch,getState)=>{
    // const {cart}=store.getState()
    // localStorage.setItem('cart',JSON.stringify(cart))
    dispatch({
        type: PRODUCT_CART_ADD ,
            data,id:Math.random(),count
        })
    const {cart}=getState()
    // const {cart}=getState()
    cookie.set("cartitem",JSON.stringify(cart))
    // localStorage.setItem('cart',JSON.stringify(cart))
    
}

export const removefromcart=(id)=> async (dispatch ,getState)=>{
    dispatch({
        type: PRODUCT_CART_REMOVE ,
            id
        })
        const {cart}=getState()
    // const {cart}=getState()
    cookie.set("cartitem",JSON.stringify(cart))
}
export const addsheeping=(sheeping)=> async (dispatch ,getState)=>{
    dispatch({
        type: SHEEPING_ADD ,
        sheeping
        })
        const {cart}=getState()
    // const {cart}=getState()
    cookie.set("cartitem",JSON.stringify(cart))
}