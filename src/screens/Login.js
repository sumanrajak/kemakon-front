import React from 'react'
import  './login.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
function Login() {
    return (
        <div  className="log_body" style={{zindex:"-111"}}>
            
            <div className="login">
            <Tabs defaultActiveKey="home"  transition={false} id="noanim-tab-example">
  <Tab eventKey="LOGIN" title="LOGIN">
            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Control type="EMAIL" placeholder=" EMAIL" style={{backgroundColor:"#F1F1F1"}} />
                
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Control type="PASSWORD" placeholder="PASSWORD" style={{backgroundColor:"#F1F1F1"}} />
            </Form.Group>
            
            <button style={{backgroundColor:"#F64B3C", color:"white",outline:"none",borderRadius:"20px",border:"none",width:'240px',height:"30px"}} type="submit">
            LOGIN  </button>
            </Form>
                            <h2 style={{Color:"#3B3939",paddingTop: "15px"  }} >OR</h2>
                            <div className="logind">
                                <div className="googl">
                                <button style={{backgroundColor:"#1365E1",color:"white",outline:"none", borderRadius:"20px",border:"none",width:'240px',height:"30px"}} type="submit">GOOGLE</button>
                                </div>
                            
                            <div className="fb">
                            <button style={{backgroundColor:"#1365E1", color:"white",outline:"none", borderRadius:"20px",border:"none",width:'240px',height:"30px"}} type="submit">FACEBOOK</button>
                            </div>
                            
                            </div>
  </Tab>
  <Tab eventKey="SIGNUP" title="SIGNUP">
  <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Control type="NAME" placeholder=" NAME" style={{backgroundColor:"#F1F1F1"}} />
                
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Control type="PHNO" placeholder="PHONE" style={{backgroundColor:"#F1F1F1"}} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Control type="EMAIL" placeholder="EMAIL" style={{backgroundColor:"#F1F1F1"}} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Control type="PASSWORD" placeholder="PASSWORD" style={{backgroundColor:"#F1F1F1"}} />
            </Form.Group>
            
            <button style={{backgroundColor:"#F64B3C", color:"white",outline:"none",borderRadius:"20px",border:"none",width:'240px',height:"30px"}} type="submit">
            SIGNIN  </button>
            </Form>
  </Tab>
  
</Tabs>
            


            
        </div>
        </div>
    )
}

export default Login
