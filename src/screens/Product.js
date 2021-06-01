import React, { useEffect, useState } from 'react'
import logo from '../MODEL.jpg';

import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { useSelector ,useDispatch } from 'react-redux';
import { addtocart } from '../actions/cartAction';
import {connect} from "react-redux";
import Axios from './axios';



const Product = (props) => {
    // const data = useSelector(state => state.productList)
    // console.log(data)
    // data.product.map(x=>console.log(x.id))
    // const product= data.products.find(x=>x.id == props.match.params.id)
    // console.log(product)
    const [product, setproduct] = useState(undefined)
    const dispatch = useDispatch()
    const add =()=>{
      console.log(product.name+" added")
      dispatch(addtocart(product,product.id,1))

    }
    useEffect(() => {
      const fetchdata= async()=>{
        console.log(props.match.params.id);
        await Axios.post(`/pdp/${props.match.params.id}`).then((res)=>{
          console.log(res.data);
          if(res.data.msg=='error'){
            console.log(res.data);
          }else{
              setproduct(res.data)
          }
      })
      }
      fetchdata();


    }, [])
    return (
        (!product?<div>no data</div>:<div>
            
            <Link to='/'> <Button className="button" style={{borderRadius:"40px" ,margin:"1rem" ,  textAlign: "center" ,fontSize: "10px"  }}>back</Button></Link>
            <div className="body" style={{display: "flex", justifyContent: "space-around",flexWrap: "wrap" ,marginTop:"1rem"}} >
                <div className="left_img" style={{maxWidth:"26rem"}}>
                <img src={product.image} style={{  objectfit : 'cover' ,padding: '2px' ,width:"100%",height:"auto"}}></img>

                </div>
                <div className="rifht" style={{display:"flex" ,flexWrap: "wrap",justifyContent:"space-evenly", width:"auto" ,}}>
                <div className="right_desc"  style={{ flexDirection: "column",fontStyle:"italic" ,height:"18rem",width:"auto",padding:"30px " ,marginBottom:"20px"}}>
                  <ul style={{listStyle:"none"}}>
                      
                  <li> <h3> {product.name.toUpperCase()}</h3></li>
                  <li><h5>{product.brand}</h5></li>
                  <li><h4>PRICE: ₹{product.price}</h4></li>
                  <li><h6>AVAILABLE SIZES : S M L XL XXL</h6></li>
                    <li>100% Original Products</li>
                    <li>Free Delivery on order above Rs. 799
</li>

                    <li>Pay on delivery might be available
</li>
                    <li>Try & Buy might be available
</li>
<li>Easy 15 days returns and exchanges
</li>
                  </ul>
                  
                  
                  
                   


                </div>
                <div className="add_box " style={{display:"block",justifyContent:"space-around",height:"18rem",width:"auto",padding:"50px" , margin:"1rem" , border: "2px solid grey"}}>
                <ul style={{listStyle:"none",marginTop:"10%" }}>
                      

                      <li><h4>PRICE: ₹{product.price}</h4></li>
                      <li><h6>STATUS: available in stock</h6></li>
                      <li><h6>COD Available</h6></li>
                      <label for="cars">QUANTITY :</label>

                        <select name="quant" id="quant" style={{ marginLeft:"9px",borderRadius:"10px"}}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        </select>
                      <li> <Button  onClick={add}  className="button" style={{borderRadius:"40px" ,marginTop:"1rem" , padding: "15px 22px", textAlign: "center" ,fontSize: "15px" ,width:"100%" }}>ADD TO CART</Button>
</li>
    
                      </ul>
                </div>
                </div>
                
            </div>
        </div>)
        
    )
}

export default connect()(Product);
