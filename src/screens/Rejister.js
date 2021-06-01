import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import  './login.css'
import axios from './axios'
import validator from 'validator'
import  { Redirect } from 'react-router-dom'





const Rejister = () => {
    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');
    const [name, setname] = useState('');
    const [error, seterror] = useState(false)
    const [EmailError, setEmailError] = useState("")
    const [success, setsuccess] = useState(false)
    const handelrequest=async()=>{
        
        await axios.post("/adduser",{
            "email": email, "password": pass,
            "name": name
        }).then((res)=>{
            console.log(res.data);
            if(res.data.msg=='error'){
                seterror(true)
            }else{
                seterror(false)
                setsuccess(true)
            }
        })
    }
    const handelsubmit=async(e)=>{
        e.preventDefault();
        console.log(email);
        console.log(pass);
        console.log(name);
        if(EmailError=="" && email!="" && name!="" && pass!=""){
            handelrequest()
        }
        else{
            alert("please enter valid details")
            console.log("error")
        }
        
        // await axios.post("/adduser",{
        //     "email": email, "password": pass,
        //     "name": name
        // }).then((res)=>{
        //     console.log(res.data);
        //     if(res.data.msg=='error'){
        //         seterror(true)
        //     }else{
        //         seterror(false)
        //     }
        // })
    }
    if (success){
        return <Redirect to='/login'  />
      }
    return (
        <div className="log_body">
            <div className="login">
            <div className="" style={{margin:"10px"}}>
                <h1>REGISTER</h1>
                </div>
                {error?<div style={{margin:"10px", color:"red"}}> ERROR : email alrerady exist , plz enter correct and unique details</div>:<div></div>}
            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Control type="name" placeholder=" NAME" style={{backgroundColor:"#F1F1F1"}} value={name}onChange={(e)=>{setname(e.target.value)}}/>
                
            </Form.Group>

           
            <Form.Group controlId="formBasicPassword">
                <Form.Control type="email" placeholder="EMAIL" style={{backgroundColor:"#F1F1F1"}} value={email}onChange={(e)=>{setemail(e.target.value) 
                 if (validator.isEmail(email)) {
                    setEmailError('')
                  } else {
                    setEmailError('Enter valid Email!')
                  }
                }}/>
            </Form.Group>
            <div className=""style={{margin:"10px", color:"red"}}>{EmailError}</div>
            
            <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="PASSWORD" style={{backgroundColor:"#F1F1F1"}} value={pass}onChange={(e)=>{setpass(e.target.value)}}/>
            </Form.Group>
            
            <button style={{backgroundColor:"#F64B3C", color:"white",outline:"none",borderRadius:"20px",border:"none",width:'240px',height:"30px"}} type="submit" onClick={handelsubmit}>
            SIGNIN  </button>
            </Form>
            </div>
        </div>
    )
}

export default Rejister
