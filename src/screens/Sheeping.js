import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import  './login.css'
import axios from './axios'
import validator from 'validator'
import  { Redirect } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import { useDispatch, useSelector } from 'react-redux'
import { addsheeping } from '../actions/cartAction'



const Sheeping = () => {
    const user = useSelector(state => state.user)
    const [address, setaddress] = useState('');
    const [state, setstate] = useState('');
    const [pin, setpin] = useState('');
    const [mob, setmob] = useState("")
    const [city, setcity] = useState("")
    const [success, setsuccess] = useState(false)
    const [fltcnt, setfltcnt] = useState('');
    const handleSelectcnt=(e)=>{
        console.log(e);
        setfltcnt(e)
      }
    const dispatch = useDispatch()
    const handelsubmit=(e)=>{
        
        e.preventDefault();

     const sheeping={
         address: address,
         mobile:mob,
         state:state,
         city:city,
         payment:fltcnt,
         pin:pin
     }
     console.log(sheeping);
     dispatch(addsheeping(sheeping))
     setsuccess(true)
       
    }
    if(user.userdelt==null){
        return <Redirect to='/login'  />
    }
    if (success){
        return <Redirect to='/confirm'  />
      }
    return (
        <div className="log_body">
            <div className="login">
                
            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Control type="address" placeholder=" ADDRESS" style={{backgroundColor:"#F1F1F1"}} value={address}onChange={(e)=>{setaddress(e.target.value)}}/>
                
            </Form.Group>

           
            <Form.Group controlId="formBasicPassword">
                <Form.Control type="email" placeholder="MOBILE NO" style={{backgroundColor:"#F1F1F1"}} value={mob}onChange={(e)=>{setmob(e.target.value) }}/>
            </Form.Group>
            
            <Form.Group controlId="formBasicPassword">
                <Form.Control type="pin" placeholder="PIN" style={{backgroundColor:"#F1F1F1"}} value={pin}onChange={(e)=>{setpin(e.target.value)}}/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Control type="state" placeholder="STATE" style={{backgroundColor:"#F1F1F1"}} value={state}onChange={(e)=>{setstate(e.target.value)}}/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Control type="city" placeholder="CITY" style={{backgroundColor:"#F1F1F1"}} value={city}onChange={(e)=>{setcity(e.target.value)}}/>
            </Form.Group>
            <Dropdown onSelect={handleSelectcnt}>
  <Dropdown.Toggle variant=" primary btn-sm "
     style={{backgroundColor:"#F64B3C",color:"white",width: "100%"}} id="dropdown-basic">
     {!fltcnt? <> SELECT PAYMENT</>: fltcnt}
  </Dropdown.Toggle>

  <Dropdown.Menu style={{width:"100%"}}>
  
      <Dropdown.Item eventKey="PAYTM"> <p>PAYTM</p></Dropdown.Item>
      <Dropdown.Item eventKey="GPAY"> <p>GPAY</p></Dropdown.Item>
      <Dropdown.Item eventKey="UPI"> <p>UPI</p></Dropdown.Item>
      <Dropdown.Item eventKey="COD"> <p>COD</p></Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
            <button style={{backgroundColor:"#F64B3C",marginTop:"10px" ,color:"white",outline:"none",borderRadius:"20px",border:"none",width:'240px',height:"30px"}} type="submit" onClick={handelsubmit}>
            CONFIRM AND PROCEED  </button>
            </Form>
            </div>
        </div>
    )
}

export default Sheeping
