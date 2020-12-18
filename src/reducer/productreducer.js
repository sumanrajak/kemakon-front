import { PRODUXT_LIST_REQUEST, PRODUXT_LIST_SUCCESS } from "../constant/productConstants"

export const produuctlistreducer =(state = {products:[]},action)=>{
    switch (action.type){
        
        case PRODUXT_LIST_SUCCESS:
            return {products: action.data}
        default:
         return state;

    }
}