import React, { useState } from 'react'
import './moodle.css'
import Form from 'react-bootstrap/Form'
import axios from '../axios'



const Moodle = ({open,child,onClose ,img }) => {
    const [price, setprice] = useState("")
    const [brand, setbrand] = useState("")
    const [name, setname] = useState('');
    const [logo, setlogo] = useState("")
    const [error, seterror] = useState(false)

    const handelsubmit= async(e)=>{
        e.preventDefault();
        await axios.post("/addproduct",{
            "brand": brand,

"image": logo,
"name": name,
"price": price
        }).then((res)=>{
            console.log(res.data);
            if(res.data.msg=='error'){
                seterror(true)
            }else{
                seterror(false)
                onClose(!open);
            }
        })
        
    }
    if(!open) return null
    return (
        <div className="moodleovrley">
            <div className="moodlebody">
                <h4>ADD ITEMS</h4>
                {error?<div>error plz try again</div>:<div></div>}
            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Control type="name" placeholder=" NAME" style={{backgroundColor:"#F1F1F1"}} value={name}onChange={(e)=>{setname(e.target.value)}}/>
                
            </Form.Group>

           
            <Form.Group controlId="formBasicPassword">
                <Form.Control type="email" placeholder="BRAND" style={{backgroundColor:"#F1F1F1"}} value={brand}onChange={(e)=>{setbrand(e.target.value)}}/>
            </Form.Group>
            
            <Form.Group controlId="formBasicPassword">
                <Form.Control type="id" placeholder="IMAGE" style={{backgroundColor:"#F1F1F1"}} value={logo}onChange={(e)=>{setlogo(e.target.value)}}/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Control type="id" placeholder="PRICE" style={{backgroundColor:"#F1F1F1"}} value={price}onChange={(e)=>{setprice(e.target.value)}}/>
            </Form.Group>
            
            <button style={{backgroundColor:"#F64B3C", color:"white",outline:"none",borderRadius:"20px",border:"none",width:'100%',height:"30px"}} type="submit" onClick={handelsubmit}>
            ADD </button>
            <button style={{backgroundColor:"#F64B3C", color:"white",outline:"none",borderRadius:"20px",border:"none",width:'100%',height:"30px" ,marginTop:"10px"}} type="submit" onClick={()=>onClose(!open)}>
            CANCEL </button>
            </Form>
            
            
            </div>
            
        </div>
    )
}

export default Moodle
