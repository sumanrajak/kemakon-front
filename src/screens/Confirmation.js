import Axios from './axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import "../confirm.css"
import logo from '../MODEL.jpg';
import { Link } from 'react-router-dom';


const Confirmation = () => {
    const cartdata = useSelector(state => state.cart)
    const user = useSelector(state => state.user)
    const list=cartdata.cart;
    const sheeping=cartdata.sheeping;
    console.log(typeof(user));

    console.log(list);
    console.log(typeof(sheeping));
    let sum=0;
    list && list.length > 0 && list.map((m)=>{
        var temp=parseInt(m.data.price);
        sum=  sum+temp;

    })
    const [success, setsuccess] = useState(false)
    const handelsubmit = async(e)=>{
        const order={
            "cart":list,
            "userdelt":user,
            "sheeping":sheeping,
            "total":sum-(sum*.2),
            "custid":user.userdelt._id
        }
        console.log(order);
        e.preventDefault();
        await Axios.post("/addorder",order).then((res)=>{
            console.log(res.data);
            if(res.data.msg=='error'){
                console.log("error");
            }else{
                alert("order placed successfully")
                setsuccess(true)
            }
        })

    }

    if(user.userdelt==null){
        return <Redirect to='/login'  />
    }
    if(sheeping==null){
        return <Redirect to='/sheep'  />
    }
    if(success){
        return <Redirect to=''  />
    }
    return (
      
        <div className="confirm">
            <div className="leftt">
                <h2 style={{margin:"10px"}}>ORDER DETAILS</h2>
            {list && list.length > 0 && list.map(m=>
               <div className="list_item" style={{display:"flex" , padding:"1rem", justifyContent:"space-around" ,fontSize:"2rem"}}>
                   <div className="imgg">
                   <img src={m.data.image} style={{ height:'auto' , objectfit : 'cover' ,padding: '2px' ,width:"auto", maxHeight:"8rem"}}></img>

                   </div>
                   <div className="info" >
                       <h5 className="list_name">{m.data.name.toUpperCase()}</h5>
                       <h6 className="list_name_brand"> BRAND:{m.data.brand}</h6>

                   </div>
                   <div className="prc">
                       <h5 className="list_name">₹{m.data.price}</h5>

                   </div>

               </div>
             )}
            </div>
            <div className="rightc">
                <div className="ebill">
                <div className="" style={{textAlign:"center"}}><h4> E-BILL</h4></div>
                    <div className="ROW">
                        <div className="leftc">CART TOTAL:</div>
                        <div className="leftc">{sum}</div>
                    </div>
                    <div className="ROW">
                        <div className="leftc">SHEEPING CHARGES:</div>
                        <div className="leftc">FREE</div>
                    </div>
                    <div className="ROW">
                        <div className="leftc">DISCOUNT:</div>
                        <div className="leftc">20%</div>
                    </div>
                    <div className="ROW">
                        <div className="leftc"><h4>TOTAL</h4></div>
                        <div className="leftc"><h4>₹ {sum-(sum*0.2)}</h4></div>
                    </div>
                </div>
                <div className="sheepingdelt">
                <div className="" style={{textAlign:"center"}}><h4> ADDRESS</h4></div>

                <div className="ROW">
                        <div className="leftc">NAME:</div>
                        <div className="leftc">{user.userdelt.name}</div>
                    </div>
                    <div className="ROW">
                        <div className="leftc">PHONE NO:</div>
                        <div className="leftc">{sheeping.mobile}</div>
                    </div>
                    <div className="ROW">
                        <div className="leftc">ADDRESS:</div>
                        <div className="leftc">{sheeping.address}</div>
                    </div>
                    <div className="ROW">
                        <div className="leftc">CITY:</div>
                        <div className="leftc">{sheeping.state},{sheeping.city},{sheeping.pin}</div>
                    </div>
                    <div className="ROW">
                        <div className="leftc">PAYMENT METHOD</div>
                        <div className="leftc">{sheeping.payment}</div>
                    </div>
                </div>
                <div className="placeorder">
                <button style={{backgroundColor:"#F64B3C", color:"white",outline:"none",borderRadius:"20px",border:"none",width:'100%',height:"30px"}} type="submit" onClick={handelsubmit}>
            PLACE ORDER </button>
            <Link to='/'>
            <button style={{backgroundColor:"#F64B3C", color:"white",outline:"none",borderRadius:"20px",border:"none",width:'100%',height:"30px" ,marginTop:"10px"}} type="submit" >
            CANCEL AND GO BACK </button>
            </Link>
                </div>
            </div>

        </div>
    )
}

export default Confirmation
