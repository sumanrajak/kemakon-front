import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../MODEL.jpg';
import "./cart.css"
import empty from '../empty cart.png';
import Button from 'react-bootstrap/Button'
import { removefromcart } from '../actions/cartAction';
import { Link } from 'react-router-dom';


const Cart = () => {
    const cartdata = useSelector(state => state.cart)
    const list=cartdata.cart;
    let sum=0;
    list.map((m)=>{
        var temp=m.data.price;
        sum=  sum+temp;

    })
    const dispatch = useDispatch()
    const del=(id)=>{
        console.log(id)

       dispatch(removefromcart(id))
    }

    
    return (
       <> {sum==0? <div className="land_body">
       <div className="left">
           <h1 className="left_text" >😪 CART IS EMPTY</h1>
           <div className="btton">
           <Link to='/'> <Button className="button" style={{borderRadius:"20px" , padding: "15px 32px", textAlign: "center" ,fontSize: "20px" }}>start shoping</Button></Link>

           </div>

       </div>
       <div className="right"><img  className="image"src={empty}></img></div>
   </div>:
       <div><div>
        
       <div className="list">

           {list.map(m=>
               <div className="list_item" style={{display:"flex" , padding:"1rem", justifyContent:"space-around" ,fontSize:"2rem"}}>
                   <div className="imgg">
                   <img src={logo} style={{ height:'auto' , objectfit : 'cover' ,padding: '2px' ,width:"auto", maxHeight:"8rem"}}></img>

                   </div>
                   <div className="info" >
                       <h5 className="list_name">{m.data.name.toUpperCase()}</h5>
                       <h6 className="list_name_brand"> BRAND:{m.data.brand}</h6>

                   </div>
                   <div className="prc">
                       <h5 className="list_name">₹{m.data.price}</h5>
                       <Button  onClick={()=>del(m.id)}   className="button" style={{borderRadius:"40px"  , padding: "10px 12px", textAlign: "center" ,fontSize: "10px" ,width:"100%" }}>remove</Button>

                   </div>

               </div>
             )}
           
           </div> 
           <div className="CART_total">
               <div className="total"><h3>TOTAL : ₹{sum}</h3></div>
               <div className="placeorder" style={{alignItems:"center"}}>
               <Button    className="button" style={{borderRadius:"40px" , padding: "10px 12px", textAlign: "center" ,fontSize: "10px" ,width:"100%" }}>PLACE ORDER</Button>

               </div>
               
           </div>

   </div></div>}</>
        
        
    )
}

export default Cart
