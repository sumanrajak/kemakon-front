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
 const productList=useSelector(state=> state.productList)
 const {products,loading,error}=productList;
//  SetProduct(productx)
 console.log(products)
 const dispatch = useDispatch();

      useEffect(() => {
        dispatch(listProduct())
            // const fetchdata= async ()=>{
            //         console.log("running")
            //       const {data}= await axios.get('/api/products');
            //      console.log(data) 
            //       console.log("running22")

            //       SetProduct(data);
            //      // dispatch(listProduct(data));


            // };
           
            // fetchdata();
           
      }, [])


useEffect(() => {
}, [])

    return (loading?<div>loading</div>: error?<div>{error}</div>:
        <div>
            
            <Land/>
            <h2 style={{marginLeft:"50px"}}>STORE</h2>


            <div className="products" style={{marginBottom:"100px"}}> 

{  products.map( product =>
   <div className="cd_body" >
   <div className="">
     <img src={product.image} className="cd_image" ></img>
   </div>
   <div className="cd_title" style={{textAlign:"center" ,fontSize:"auto" ,marginTop:"2px"}}>
     <h5>{product.name}</h5>
   </div>
   <div className="cpname" style={{marginLeft:"15px",marginBottom:"1vh"}}>
     {product.brand}
   </div>
   <div className="cdorder" style={{display:"flex" ,justifyContent:"space-around" ,marginBottom:"2vh", alignItems:"center"}}>
   <div className="cd_price" ><h6>₹{product.price}</h6></div>
  <Link to={`/product/${product._id}`}><button variant="danger"  style={{backgroundColor:"#F64B3C", color:"white",outline:"none",borderRadius:"18px",border:"none",width:'60px',height:"30px" }}>VIEW</button></Link> 
  
  
   </div>
   </div> 
)}








</div>
        </div>
    )
}

export default Home
