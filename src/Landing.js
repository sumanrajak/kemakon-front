import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from './shop.png'
import './land.css'
import Button from 'react-bootstrap/Button'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Landing = () => {
    const user = useSelector(state => state.user)
    // const name= "user " || (!!user.userdelt.name && !!user.userdelt.name) ? user.userdelt.name : 'user',
    const {userdelt,loading,errorr}=user;
    return (
        <div className="land_body">
            <div className="left">
                <h1 className="left_text" > HI <strong style={{color:"#F64B3C"}}>{userdelt?userdelt.name.toUpperCase():""}</strong><br></br> BE A KEMA MEMBER AND GET OFFERS</h1>
                <div className="btton">
                {/* <Button className="button" style={{borderRadius:"20px" , padding: "15px 32px", textAlign: "center" ,fontSize: "20px" }}>get started</Button> */}
                <Link to='/Register'><button style={{backgroundColor:"#F64B3C", color:"white",outline:"none",borderRadius:"20px",border:"none",width:'200px',height:"40px" ,marginTop:"5PX" ,marginLeft:"10px"}} >
            GET STARTED </button></Link>
                </div>

            </div>
            <div className="right"><img  className="image"src={logo}></img></div>
        </div>
    )
}

export default Landing
