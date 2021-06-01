import React, { useState } from 'react'
import Axios from '../axios';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import Cookies from 'js-cookie';


const Profile = () => {
    const [orders, setorders] = useState("")
    const user = useSelector(state => state.user)
    const isadmin= Cookies.getJSON('isadmin') || false

    useEffect(() => {
        const fetchdeta=async()=>{
            const res = await Axios.get(`/adminorder`);
            setorders(res.data)
            console.log(res.data);
        }
        fetchdeta();

    }, [])

    // if(user.userdelt.isadmin==false || undefined){
    //     return <Redirect to='/'  />
    // }
    if(!isadmin){
        return <Redirect to='/login'  />
    }
    return (
        <div>
            <div className="profile" style={{padding:"20px"}}>
                <div className="">
                    <div className=""> <h1>ADMIN ORDER PANAL</h1></div>
                </div>
                <div className="orderdetails">
                <div className="tablecrud">
                <div className="tablemain">

            <table>
                <thead>
                <tr  key="22332"className="">
                    <th>Nmae</th>
                    <th> NO of items</th>
                    <th>status</th>
                    <th>total price</th>
                    <th> address</th>
                    
                    <th>Payment method</th>

                </tr>
                
                </thead>
                <tbody>
                
                {
                   orders && orders.length>0 &&  orders.map((n,i)=>{
                        return  <tr key={n._id+444}>
                        <td key={i+n._id}>{n.userdelt.userdelt.name}</td>
                        <td key={n._id+1+45} >{n.cart.length}</td>
                        <td key={n._id+1000+7}>{n.status}</td>
                        <td key={n._id+56}>₹ {n.total}</td>
                        <td key={99+n._id}>{n.sheeping.address}</td>
                        <td key={997+n._id}>{n.sheeping.payment}</td>

                        
                        
                    </tr> 
                    
                    })
                }
                </tbody>
                </table>
                </div>
                
            </div>

                </div>
            </div>
        </div>
    )
}

export default Profile
