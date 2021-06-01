import {PRODUCT_CART_ADD,PRODUCT_CART_REMOVE, SHEEPING_ADD} from '../constant/cartConstrain'
const localdata=()=>{
    const lld=JSON.parse(localStorage.getItem('cart'))
    if(lld==null){
        localStorage.setItem('cart','[]')
        return []
    }else{
        
        return [lld]
    }
}
export const cartreducer =(state = {cart:[]},action)=>{
    switch (action.type){
        
        case PRODUCT_CART_ADD:
            // const locall={
            //     ... state,
            //     cart:[...state.cart,{
            //         data:action.data,
            //         id: action.id,
            //         count:action.count,
            //     }]
            // }
        //     localStorage.setItem('cart',JSON.stringify(locall.cart))
        //    const dataK=localStorage.getItem('cart')
        const item = {
            data:action.data,
            id: action.id,
            count:action.count,
        };
        // const product = state.cart && state.cart.length>0 && state.cart.find(x => x.product === item.product);
        // if (product) {
        //   return {
        //     cart:
        //       state.cart.map(x => x.product === product.product ? item : x)
        //   };
        // }
            return  {
                ...state,
                cart:[...state.cart,item]
            }
        case PRODUCT_CART_REMOVE:
            const datas= state.cart.filter((m)=>  m.id !== action.id)
            // localStorage.setItem('cart',JSON.stringify(datas))
            // const local=localStorage.getItem('cart')
            return {cart:datas}

        case SHEEPING_ADD:
            // const datas= state.cart.filter((m)=>  m.id !== action.id)
            // localStorage.setItem('cart',JSON.stringify(datas))
            // const local=localStorage.getItem('cart')
            return {...state,sheeping:action.sheeping}
        default:
         return state;

    }
}