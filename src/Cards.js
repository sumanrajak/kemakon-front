import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import logo from './MODEL.jpg';
import "./cards.css";


const Cards = () => {
    return (
      <div className="cards">
              {/* <Card style={{ width: '18rem' , position:'relative'}}>
   <Card.Img variant="top" src={logo} style={{ height:'20rem' , objectfit : 'cover'  }} />
   <Card.Body>
     <Card.Title>Female black and white printed</Card.Title>
     <Card.Text>
      X M L XL XLL
    </Card.Text>
    <Button variant="danger">Add</Button>
   </Card.Body>
 </Card>  */}


  <div className="cd_body" style={{zIndex:"-1 "}}>
 <div className="cd_image">
   <img src={logo} style={{ height:'20rem' , objectfit : 'cover' ,padding: '2px'}}></img>
 </div>
 <div className="cd_title" style={{textAlign:"center"}}>
   <h3>women grown</h3>
 </div>
 <div className="cpname" style={{marginLeft:"15px"}}>
   zara
 </div>
 <div className="cdorder" style={{display:"flex" ,justifyContent:"space-around" ,marginBottom:"2vh"}}>
 <div className="cd_price">2000</div>
 <Button variant="danger">Add</Button>


 </div>



 </div> 
       </div>



    )
}

export default Cards
