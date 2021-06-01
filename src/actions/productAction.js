import axios from "../screens/axios";
import { PRODUXT_LIST_FAIL, PRODUXT_LIST_REQUEST, PRODUXT_LIST_SUCCESS } from "../constant/productConstants"


export const listProduct=()=>async (dispatch)=> {
    // return{type : PRODUXT_LIST_SUCCESS, data}
    try{
        dispatch({type : PRODUXT_LIST_REQUEST})
        const {data}= await axios.get('/api/products');
        dispatch({type : PRODUXT_LIST_SUCCESS, payload :data})
    }catch(error){
        // console.log(error);
        // console.log(" errooorrr");
        dispatch({type : PRODUXT_LIST_FAIL , payload : error.message})


    }
}