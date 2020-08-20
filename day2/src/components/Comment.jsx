import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {Card,Container} from 'react-bootstrap'


  const books ={
    fantasy: require ("../fantasy.json"),
    history:require("../history.json"),
    horror:require("../horror.json"),
    romance:require("../romance.json"),
    scifi:require("../scifi.json") 
}

 class Comment extends Component {
   


state={
   singleBook: books[this.props.match.params.category],
   single:this.props.match.params.id
}
  book =  this.state.singleBook.find(single=> single.asin===this.state.single)


  componentDidUpdate( prevProps,prevState) {
    if (prevState.singleBook !==this.state.singleBook) {
      this.setState({
    singleBook:this.state.singleBook
      })
    };
    if(prevProps.match.params.id !== this.props.match.params.id){
this.setState({
single:this.props.match.params.id
})
    }

  }

// componentDidMount = async()=>{

// let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.id,{
//    headers: {
//     'Authorization': 'Basic ' + btoa("user2:4Lr9nqHZZZDNUy7L")
//     }
// })

//   let coments= await response.json()
//   this.setState({
//     comments:coments
//   })
// console.log("hello",coments)

// }




    render() {   
   return (
    <Container >
      <div style={{width:"400px" ,height:"auto",marginLeft:"30%"}}>
         <Card  >
    <Card.Img variant="top" src={this.book.img} style={{height:"250px", width:"250px", marginLeft:"20%"}}/>
    <Card.Body>
      <Card.Text>
       {this.book.title}
      </Card.Text>
      <Card.Text>
       {this.book.category}
      </Card.Text>
      <Card.Text>
       {this.book.price}
      </Card.Text>
    </Card.Body>
  </Card>
  </div>
</Container>

  
        
        )
    }
}


export default  withRouter(Comment)
