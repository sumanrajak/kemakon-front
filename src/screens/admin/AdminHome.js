import Axios from '../axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listProduct } from '../../actions/productAction';
import './adminhome.css'
import Moodle from './Moodle';
import { Redirect } from 'react-router';
import Cookies from 'js-cookie';

const AdminHome = () => {
    const productList=useSelector(state=> state.productList)
 const {products,loading,error}=productList;
 console.log(products)
 const isadmin= Cookies.getJSON('isadmin') || false
const [res, setres] = useState("initialState")
 const deletepro=async(id)=>{
     console.log("cllicked");
    const res = await Axios.delete(`/${id}`);
    setres(res)
    console.log(res)
    
 }

 const [isopen, setisopen] = useState(false)
    const handlepop=()=>{
        setisopen(!isopen);
        console.log(isopen)
    }

 const dispatch = useDispatch();

      useEffect(() => {
        dispatch(listProduct())
          
      }, [])
      useEffect(() => {
        dispatch(listProduct())
          
      }, [res])
      useEffect(() => {
        dispatch(listProduct())
          
      }, [isopen])
      if(!isadmin){
        return <Redirect to='/login'  />
    }
    return (loading?<div>loading</div>: error?<div>{error}</div>:
        <div className="adminhome" >
            <button onClick={handlepop} style={{backgroundColor:"#F64B3C", color:"white",outline:"none",borderRadius:"20px",border:"none",width:'200px',height:"30px"}}>ADD PRODUCTS</button>
            <Moodle open={isopen} onClose={()=> {setisopen(false)}}  ></Moodle>
            <div className="tablecrud">
                <div className="tablemain">

            <table>
                <thead>
                <tr  key="22332"className="">
                    <th>Sl. no.</th>
                    <th> Name</th>
                    <th>Brand</th>
                    <th>image</th>
                    <th> price</th>
                    
                    <th>Actions</th>

                </tr>
                
                </thead>
                <tbody>
                
                {
                   products && products.length>0 &&  products.map((n,i)=>{
                        return  <tr key={n._id+444}>
                        <td key={i+n._id}>{i+1}</td>
                        <td key={n._id+1+45} >{n.name}</td>
                        <td key={n._id+1000+7}>{n.brand}</td>
                        <td key={n._id+56}>{n.image}</td>
                        <td key={99+n._id}>{n.price}</td>
                        
                        <td key={82+n._id+5}><button style={{backgroundColor:"#F64B3C", color:"white",outline:"none",borderRadius:"20px",border:"none",width:'60px',height:"30px"}} >edit</button> 
                        <button onClick={()=>deletepro(n._id)} style={{backgroundColor:"#F64B3C", color:"white",outline:"none",borderRadius:"20px",border:"none",width:'100px',height:"30px",margin:"4px"}}>delete</button></td>
                
                    </tr> 
                    
                    })
                }
                </tbody>
                </table>
                </div>
                
            </div>
            
        </div>
    )
}

export default AdminHome
