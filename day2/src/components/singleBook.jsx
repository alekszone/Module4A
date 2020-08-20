import React, { Component } from 'react'
import {Button,Card,Row,Col} from 'react-bootstrap'
import {Link } from 'react-router-dom'

export default class singleBook extends Component {
    state={
        movies:this.props.movies,
        category:this.props.category
    }
    componentDidUpdate(prevProps, prevState) {
      if (prevProps.movies !== this.props.movies) {
        this.setState({
          movies:this.props.movies
        })
      };
if(prevProps.category !== this.props.category){
  this.setState({
    category:this.props.category
  })
}
    }


    render() {
        return (
            <Col xs lg={3}>
            <Card key={this.state.movies.asin} className="mt-1 " style={{width:"150px" , height:"300px"}}>
          <Card.Img variant="top"  src={this.state.movies.img} style={{height:"100px"}} />
          <Card.Body style={{height:"100px"}}>
        <Card.Title><h6>{this.state.movies.title.slice(0,8)}</h6></Card.Title>
        <Card.Title>{this.state.movies.price}</Card.Title>
            <Card.Text>
              {this.state.movies.category}
            </Card.Text>
            <Button variant="success"><Link  className="nav-link" style={{color:'white'}} to={"/Comment/"+ this.state.movies.asin + "/" + this.state.category }>Details</Link></Button>
            
          </Card.Body>
        </Card>
        </Col>
        )
    }
}
