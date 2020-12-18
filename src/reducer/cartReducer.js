import {PRODUCT_CART_ADD,PRODUCT_CART_REMOVE} from '../constant/cartConstrain'
export const cartreducer =(state = {cart:[]},action)=>{
    switch (action.type){
        
        case PRODUCT_CART_ADD:
            return {
                ... state,
                cart:[...state.cart,{
                    data:action.data,
                    id: action.id,
                    count:action.count,
                }]
            }
        case PRODUCT_CART_REMOVE:
            const datas= state.cart.filter((m)=>  m.id !== action.id)
            return {cart:datas}
        default:
         return state;

    }
}