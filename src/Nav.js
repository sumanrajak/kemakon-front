import React, { useState } from 'react'
import cookie from "js-cookie"

import './nav.css'
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from "react-redux"
import { useEffect } from 'react';
import Cookies from 'js-cookie';


const Nav = () => {
    const [sidebar,setsidebar]=useState(false);
    const setnav =()=>{
        setsidebar(!sidebar);
        console.log(sidebar);
    }
    const user=useSelector(state=> state.user)
    const cartdata = useSelector(state => state.cart)
    const list=cartdata.cart;

    const isadmin= Cookies.getJSON('isadmin') || false

    const logout=()=>{
        cookie.set("cartitem",JSON.stringify(""))
        cookie.set("user",JSON.stringify(""))
        cookie.remove("isadmin")

        window.location.reload(); 
    }
    
    const {userdelt,loading,errorr}=user;
   
   return (
        <div>
            <div className="nav_body">
                <div className="" style={{display:"flex"}}>
                {!sidebar? <MenuIcon onClick={setnav} style={{marginTop:"7px"}} className="on"/>:<ClearIcon onClick={setnav}   className="off"/>  }
                      

                      <div className="lav_l"><Link to="/" style={{color:"white",textDecoration:"none" }}>KEMAKON </Link></div>
                      
                </div>
                <div className="" style={{display:"flex"}}>
                <div className="right">
                    {
                        userdelt? <div>{isadmin?<div className="right" style={{marginRight:"4px"}}><Link to="/admin" style={{color:"white",textDecoration:"none"}}><h6>ADMIN</h6> </Link> </div>:
                        <div className="right" style={{marginRight:"4px"}}><Link to="/profile" style={{color:"white",textDecoration:"none"}}><h6>{userdelt.name.toUpperCase()}</h6> </Link> </div>} </div>
                        :<div className="right" style={{marginRight:"4px"}}><Link to="/login" style={{color:"white",textDecoration:"none"}}><h6>Login</h6> </Link></div>
                    }
                    
                </div>
                {/* <div>{list.lenght}</div> */}
                    <div className="right" style={{marginRight:"10px" ,marginLeft:"10PX"}}>
                        {isadmin=="true"?<Link to="/orders" style={{color:"white",textDecoration:"none"}}><h6>ORDERS</h6> </Link> :
                        <Link to="/cart" style={{color:"white",textDecoration:"none"}}><h6>CART</h6> </Link> }
                       
                    
                    {/* <Link to="/cart"><h6>CART</h6> </Link> */}
                </div></div>
  
                
                
                </div>
                <div className={sidebar ? "nav_active":'nav_inactive'}>
                    <div className="nav_side">
                        <div className="close_div">
                        {/* <button onClick={setnav}  className="close" >off</button> */}

                        </div>

                    <div className="nav_items">

                <ul onClick={setnav}>
                    
                <Link to="/" style={{color:"white",textDecoration:"none"}}><li className="text "><h6 className="lav_l"> KEMAKON</h6></li> </Link>
                    <li className="text"><Link to={!userdelt? "/login":"/profile"} style={{color:"white",textDecoration:"none"}}><h6>PROFILE</h6> </Link> </li>
                    <li className="text"><Link to="/" style={{color:"white",textDecoration:"none"}}><h6>HOME</h6> </Link> </li>
                    <li className="text"><Link to="/sheep" style={{color:"white",textDecoration:"none"}}><h6>Add details</h6> </Link></li>
                    <li className="text"><h6 style={{cursor:"pointer"}} onClick={logout}>LOG OUT</h6> </li>

                    </ul></div></div> </div>
           
        </div>
    )
}

export default Nav
