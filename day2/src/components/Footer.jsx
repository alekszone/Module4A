import React, { Component } from 'react'
import {Row,Col} from 'react-bootstrap'
import insta from '../images/insta.jpg'

export default class Footer extends Component {
    render() {
        return (
            <footer>
            <Row className="mb-0"  style={{bottom:"0%", height:"50px"  }} >
     <Col xs={3} lg={3} >
  You can find us 
         </Col>   
         <Col xs={6} lg={6} >
       <img src={insta} style={{height:"30px"}}/>
         </Col>
         <Col xs = {3} lg={3} >
           My Homepage
         </Col>
            
              </Row>
              </footer>
        )
    }
}

