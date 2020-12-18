import React, { useState } from 'react'
import './nav.css'
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import {Link} from 'react-router-dom'

const Nav = () => {
    const [sidebar,setsidebar]=useState(false);
    const setnav =()=>{
        setsidebar(!sidebar);
        console.log(sidebar);
    }
    return (
        <div>
            <div className="nav_body">
    {!sidebar? <MenuIcon onClick={setnav} className="on"/>:<ClearIcon onClick={setnav}   className="off"/>  }
                      

                <div className="lav_l">KEMAKON</div>
                <div className="right">
                    <Link to="/cart"><h6>CART</h6> </Link>
                </div>
                
                </div>
                <div className={sidebar ? "nav_active":'nav_inactive'}>
                    <div className="nav_side">
                        <div className="close_div">
                        {/* <button onClick={setnav}  className="close" >off</button> */}

                        </div>

                    <div className="nav_items">

                <ul onClick={setnav}>
                    
                    <li className="text">home</li>
                    <li className="text">sign in</li>
                    <li className="text">contact us</li>
                    <li className="text">cart</li>
                    
                    </ul></div></div> </div>
           
        </div>
    )
}

export default Nav
