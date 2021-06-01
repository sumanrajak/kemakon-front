import axios from "../screens/axios";
import { LOGIN_LIST_REQUEST, LOGIN_LIST_SUCCESS, LOGIN_LIST_FAIL } from "../constant/loginConstrain"
import cookie from "js-cookie"


export const login=(email,pass)=>async (dispatch,getState)=> {
    // return{type : PRODUXT_LIST_SUCCESS, data}
    try{
        dispatch({type : LOGIN_LIST_REQUEST})
        const {data}= await axios.post("/checkuser",{
            "email": email, "password": pass
        });
        if(data.message=='invlid'){
            dispatch({type : LOGIN_LIST_FAIL , payload : data})
        }else{
            dispatch({type : LOGIN_LIST_SUCCESS, payload :data})
            const {userdelt}=getState()
            if(data.isadmin){
                cookie.set("isadmin",JSON.stringify("true"))
            }
    // const {cart}=getState()
    cookie.set("user",JSON.stringify(data))
        }
        
    }catch(error){
        // console.log(error);
        // console.log(" errooorrr");
        dispatch({type : LOGIN_LIST_FAIL , payload : error.message})


    }
}