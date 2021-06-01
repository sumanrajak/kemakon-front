import React from 'react';
import './footer.css';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function Footer() {
  return (
    <div  className="footer">
    
     <Container>
         <Row>
             <Col> <h3>Contacts</h3>
             <ul>
             <li>Developer:<strong> SUMAN RAJAK </strong></li>

                 <li> Email: <a href="mailto:1806261@kiit.ac.in" style={{color:"white",textDecoration:"none",cursor:"pointer"}}>1806261@kiit.ac.in</a></li>
                <li>Personal email:<a href="mailto:sumanrajak2001@gmail.com" > sumanrajak2001@gmail.com</a> </li>
                <li>Newtown, Kolkata,WB</li>
                <li>+91 7001396147</li>

                     </ul></Col>
             
             <Col> <h3>Links</h3>
             <ul>
                 <li><a href="https://www.instagram.com/bong_boy_sr/?hl=en" style={{color:"white",textDecoration:"none" ,cursor:"pointer"}}>Instagram</a></li>
                 <li><a href="https://www.facebook.com/sumanrajak2001/" style={{color:"white",textDecoration:"none"}}>Facebook</a></li>
                 <li><a href="https://www.linkedin.com/in/suman-rajak-730021196/"style={{color:"white",textDecoration:"none"}}>LinkedIn</a></li>
                 <li><a href="https://github.com/sumanrajak " style={{color:"white",textDecoration:"none"}}>Github</a></li>
             </ul>
             </Col>
             <Col>
         <p className="copyright">© KEMAKON 2021</p>  </Col>

         </Row>
         <br/>
         
         
         <Row> </Row>
     </Container>
    
    </div>
  );
}

export default Footer;
