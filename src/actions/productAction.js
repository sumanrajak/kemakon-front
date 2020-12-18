import Axios from "axios";
import { PRODUXT_LIST_FAIL, PRODUXT_LIST_REQUEST, PRODUXT_LIST_SUCCESS } from "../constant/productConstants"


export const listProduct=(data)=> {
    return{type : PRODUXT_LIST_SUCCESS, data}
    // try{
    //     // const {data}= await Axios.get('/api/products');
    //     console.log(data);
    //     return{type : PRODUXT_LIST_SUCCESS, paylod :data}
    // }catch(error){
    //     console.log(error);
    //     console.log(" errooorrr");
    //     return{type : PRODUXT_LIST_FAIL , paylod : [error]}


    // }
}