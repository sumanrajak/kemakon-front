import {PRODUCT_CART_ADD,PRODUCT_CART_REMOVE} from '../constant/cartConstrain'


export  const addtocart=(data,id,count)=>{
    return{
        type: PRODUCT_CART_ADD ,
            data,id:Math.random(),count
        }
    
}

export const removefromcart=(id)=>{
    return{
        type: PRODUCT_CART_REMOVE ,
            id
        }
}