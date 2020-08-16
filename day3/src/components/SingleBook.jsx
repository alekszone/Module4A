import React from 'react'
import {Card ,Button,Col,Row} from 'react-bootstrap'
export default function SingleBook(props) { 
    
   return(
    <>

  <Row>
    
       
       
       
      <Col xs={3}>
        <Card key={props.books.asin} style={{ width: '18rem', }}>
        <Card.Img variant="top" src={props.books.img} style={{ width: '280px', height:"150px"}} />
        <Card.Body>
       <Card.Title>{props.books.title}</Card.Title>
       <Card.Title>{props.books.category}</Card.Title>
          <Card.Text>
          {props.books.price}
          </Card.Text>
          <Button variant="primary"></Button>
        </Card.Body>
      </Card>

</Col>


   
    
    </Row>
    </>
   )
}
