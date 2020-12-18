import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from './shop.png'
import './land.css'
import Button from 'react-bootstrap/Button'


const Landing = () => {
    return (
        <div className="land_body">
            <div className="left">
                <h1 className="left_text" >BE A KEMA MEMBER AND GET OFFERS</h1>
                <div className="btton">
                <Button className="button" style={{borderRadius:"20px" , padding: "15px 32px", textAlign: "center" ,fontSize: "20px" }}>get started</Button>

                </div>

            </div>
            <div className="right"><img  className="image"src={logo}></img></div>
        </div>
    )
}

export default Landing
