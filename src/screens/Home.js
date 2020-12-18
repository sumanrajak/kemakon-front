import React, { useEffect, useState } from 'react'
import Land from '../Landing'
import Button from 'react-bootstrap/Button'
import logo from '../MODEL.jpg';
// import data from '../deta';
import {Link} from 'react-router-dom'
import axios from "axios";
import { listProduct } from '../actions/productAction';
import {useSelector,useDispatch} from "react-redux"



const Home = () => {
 const [product,SetProduct]=useState([]);
 const dispatch = useDispatch();

      useEffect(() => {
            const fetchdata= async ()=>{
                    console.log("running")
                  const {data}= await axios.get('/api/products');
                 console.log(data) 
                  console.log("running22")

                  SetProduct(data);
                  dispatch(listProduct(data));


            };
           
            fetchdata();
           
      }, [])


useEffect(() => {
}, [])

    return (
        <div>
            
            <Land/>
            <h2 style={{marginLeft:"20px"}}>STORE</h2>


            <div className="products"> 

{product.map( product =>
   <div className="cd_body" style={{ margin:"2rem"}}>
   <div className="cd_image">
     <img src={logo} style={{ height:'28rem' , objectfit : 'cover' ,padding: '2px' ,width:"auto"}}></img>
   </div>
   <div className="cd_title" style={{textAlign:"center" ,fontSize:"auto" ,marginTop:"2px"}}>
     <h5>{product.name}</h5>
   </div>
   <div className="cpname" style={{marginLeft:"15px",marginBottom:"1vh"}}>
     {product.brand}
   </div>
   <div className="cdorder" style={{display:"flex" ,justifyContent:"space-around" ,marginBottom:"2vh", alignItems:"center"}}>
   <div className="cd_price" ><h6>₹{product.price}</h6></div>
  <Link to={`/product/${product.id}`}><Button variant="danger"  style={{borderRadius:"20px" }}>MORE DETAILS</Button></Link> 
  
  
   </div>
   </div> 
)}








</div>
        </div>
    )
}

export default Home
