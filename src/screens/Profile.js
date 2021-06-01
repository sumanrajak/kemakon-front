import React, { useState } from 'react'
import "./profile.css"
import Axios from './axios';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';


const Profile = () => {
    const [orders, setorders] = useState("")
    const user = useSelector(state => state.user)
    const {userdelt,loading,errorr}=user;

    useEffect(() => {
        const fetchdeta=async()=>{
            const res = await Axios.get(`/order/${user.userdelt._id}`);
            setorders(res.data)
            console.log(res.data);
        }
        fetchdeta();

    }, [])
    if(user.userdelt==null){
        return <Redirect to='/'  />
    }


    return (
        <div>
            <div className="profile" style={{padding:"20px"}}>
                <div className="tablecrud"><div className="" style={{padding:"20px"}}>
        <div className=""><h2>Name : {user.userdelt.name.toUpperCase()}</h2></div>
        <div className="email"><h5>Email : {userdelt.email}</h5></div>
        <div className="">Userid : Kemakon {user.userdelt._id}</div>
        </div>

                </div>
                <div className="orderdetails">
                <div className="tablecrud">
                <div className="tablemain">

            {orders.length==0?<div><h2 style={{marginLeft:"40px"}}>NO ORDERS </h2></div>:<div><h2 style={{marginLeft:"40px"}}> ORDERS  : </h2></div>}
                
                {
                   orders && orders.length>0 &&  orders.map((n,i)=>{
                        return  <div className="orderrr">
                            <h4>order no : {i+1}</h4>
                            <div className="orderrow" >
                                
                        <h5>No of items : {n.cart.length}</h5>
                        <h5>status :  {n.status}</h5>
                        <h4>price: ₹{n.total}</h4></div>
                            <div className="">
                            <h5>phone : {n.sheeping.mobile}</h5> 
                        <h5>payment : {n.sheeping.payment}</h5>
                            </div>
                            
                        {/* <h5>Address : {n.sheeping.address}, {n.sheeping.city}, {n.sheeping.state}, {n.sheeping.pin}</h5>
                        */}
                        
                        
                        </div>
                    
                    })
                }
                
                </div>
                
            </div>

                </div>
            </div>
        </div>
    )
}

export default Profile

// <tr key={n._id+444}>
//                         <td key={i+n._id}>{i+1}</td>
//                         <td key={n._id+1+45} >{n.cart.length}</td>
//                         <td key={n._id+1000+7}>{n.status}</td>
//                         <td key={n._id+56}>{n.total}</td>
//                         <td key={99+n._id}>{n.sheeping.address}</td>
//                         <td key={997+n._id}>{n.sheeping.payment}</td>

                        
                        
//                     </tr> 