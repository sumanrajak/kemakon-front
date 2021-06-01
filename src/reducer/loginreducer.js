import { LOGIN_LIST_REQUEST, LOGIN_LIST_SUCCESS, LOGIN_LIST_FAIL } from "../constant/loginConstrain"

export const loginreducer =(state = {},action)=>{
    switch (action.type){
        
        case LOGIN_LIST_REQUEST:
            return {loading:true}
        case LOGIN_LIST_SUCCESS:
            return {loading:false,userdelt: action.payload}
        case LOGIN_LIST_FAIL:
            return {loading:false,errorr: action.payload}
        default:
         return state;
         

    }
}