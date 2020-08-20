import React, { Component } from 'react'
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'

export default class MyNav extends Component {




    render() {
        return (
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>              
            </Nav>           
          </Navbar>
        )
    }
}
