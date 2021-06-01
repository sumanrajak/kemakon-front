import React, { useEffect, useState } from 'react'
import  './login.css'
import Form from 'react-bootstrap/Form'
import axios from './axios'
import {useSelector,useDispatch} from "react-redux"
import { login } from '../actions/loginAction'
import  { Link, Redirect } from 'react-router-dom'


function Login() {
    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');
    const [error, seterror] = useState(false)
    const user=useSelector(state=> state.user)
 const {userdelt,loading,errorr}=user;
 
 const dispatch = useDispatch();
 useEffect(() => {
    console.log(userdelt)
    if(userdelt) {
        // props.history.push('/')
        
    }
 }, [userdelt])
 useEffect(() => {
     console.log(errorr);
    if(errorr){
        seterror(true)
    }else{
        seterror(false)
    }
 }, [errorr])



    const handelsubmit=async(e)=>{
        e.preventDefault();
        dispatch(login(email,pass))
        console.log(email);
        console.log(pass);
        // console.log(errorr);
        // console.log(userdelt)
        // await axios.post("/checkuser",{
        //     "email": email, "password": pass
        // }).then((res)=>{
        //     console.log(res.data);
            
        // })
        if(errorr){
            seterror(true)
        }else{
            seterror(false)
        }
    }
    if (userdelt){
    return <Redirect to='/'  />
  }
    return ( 
        <div  className="log_body" style={{zindex:"-111"}}>
            
            <div className="login">
                <div className="" style={{margin:"10px"}}>
                <h1>LOGIN</h1>
                </div>
        {error?<div style={{margin:"10px", color:"red"}}>error : Invalid User Details</div>:<div></div>}
            <Form handel>
            <Form.Group controlId="formBasicEmail">
                <Form.Control type="EMAIL" placeholder=" EMAIL" style={{backgroundColor:"#F1F1F1"}}  value={email}onChange={(e)=>{setemail(e.target.value)}} />
                
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Control type="PASSWORD" placeholder="PASSWORD" style={{backgroundColor:"#F1F1F1"}} value={pass}onChange={(e)=>{setpass(e.target.value)}}/>
            </Form.Group>
            <div className="" style={{display:"flex"}}>
            <button style={{backgroundColor:"#F64B3C", color:"white",outline:"none",borderRadius:"20px",border:"none",width:'240px',height:"30px",marginTop:"15PX"}} type="submit" onClick={handelsubmit}>
            LOGIN  </button>
            <Link to='/Register'><button style={{backgroundColor:"#F64B3C", color:"white",outline:"none",borderRadius:"20px",border:"none",width:'200px',height:"30px" ,marginTop:"15PX" ,marginLeft:"10px"}} >
            CREATE A ACCOUNT  </button></Link>
            </div>

            </Form>
                           


  
            


            
        </div>
        </div>
    )
}

export default Login
