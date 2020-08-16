import React, { Component } from 'react'
import {Jumbotron,Container} from 'react-bootstrap'
import './books.css'

export default class Welcome extends Component {
    render() {
        return (
            <Jumbotron fluid  className="image" >
            <Container style={{color:"white"}}>
              <h1>Welcome</h1>
              <h1>
               My Book Store
              </h1>
            </Container>
          </Jumbotron>
        )
    }
}
