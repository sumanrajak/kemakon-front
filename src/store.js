import data from "./deta"
import {createStore,compose,applyMiddleware, combineReducers} from "redux"
import thunk from 'redux-thunk'
import { produuctlistreducer  } from "./reducer/productreducer"
import { cartreducer  } from "./reducer/cartReducer"


const initialState={}
// const reducer=(state,action)=>{
//     return{products : data.product}
// }
const reducer = combineReducers({
    productList : produuctlistreducer,
    cart:cartreducer,
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
const store = createStore(reducer,initialState ,composeEnhancer(applyMiddleware(thunk)))

export default store;