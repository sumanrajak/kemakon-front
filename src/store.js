import data from "./deta"
import cookie from "js-cookie"

import {createStore,compose,applyMiddleware, combineReducers} from "redux"
import thunk from 'redux-thunk'
import { produuctlistreducer  } from "./reducer/productreducer"
import { cartreducer  } from "./reducer/cartReducer"
import { loginreducer } from "./reducer/loginreducer"

const cartitem= cookie.getJSON('cartitem') || []
const cart=cartitem.cart || [];
const sheeping=cartitem.sheeping || null;

const userdelt= cookie.getJSON('user') || null

const initialState={ cart:{cart,sheeping} ,user :{userdelt}}
// const reducer=(state,action)=>{
//     return{products : data.product}
// }
const reducer = combineReducers({
    productList : produuctlistreducer,
    cart:cartreducer,
    user:loginreducer,
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
const store = createStore(reducer,initialState ,composeEnhancer(applyMiddleware(thunk)))

export default store;