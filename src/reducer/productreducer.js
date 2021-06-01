 import { PRODUXT_LIST_REQUEST, PRODUXT_LIST_SUCCESS ,PRODUXT_LIST_FAIL} from "../constant/productConstants"

export const produuctlistreducer =(state = {products:[]},action)=>{
    switch (action.type){
        
        case PRODUXT_LIST_REQUEST:
            return {loading:true}
        case PRODUXT_LIST_SUCCESS:
            return {loading:false,products: action.payload}
        case PRODUXT_LIST_FAIL:
            return {loading:false,error: action.payload}
        default:
         return state;
         

    }
}