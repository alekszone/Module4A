import React, { Component } from 'react'
import {Button,Card,Row,Col,Container,ToggleButton } from  'react-bootstrap'
import {Link } from 'react-router-dom'


const category ={
    fantasy: require ("../fantasy.json"),
    history:require("../history.json"),
    horror:require("../horror.json"),
    romance:require("../romance.json"),
    scifi:require("../scifi.json") 
}


 class LatestRelease extends Component {
state={
    limit:8,
    books:category.fantasy
}
movies = ["fantasy","history","horror","romance","scifi"]



movi=(event)=>{
    const singleMovie = event.currentTarget.value
this.setState({
    books:category[singleMovie]
})
console.log(this.state.books) 
}


showMore=()=>{
this.state.limit===8 ?
this.setState({
    limit:16
}): this.setState({limit:8})
}


    render() {
    
        return (
         <>
         {this.movies.map((categorys,key)=>{
             return(
 <Button variant="primary" value={categorys} key={key} onClick={this.movi} >{categorys}</Button>
         )})}
<Container>
<Row>
{this.state.books.slice(0,this.state.limit).map((movies,key)=>{   
     return(
    <Col xs lg={3}>
    <Card key={movies.asin} className="mt-1 " style={{width:"150px" , height:"300px"}}>
  <Card.Img variant="top"  src={movies.img} style={{height:"100px"}} />
  <Card.Body style={{height:"100px"}}>
<Card.Title>{movies.title.slice(0,20)}</Card.Title>
<Card.Title>{movies.price}</Card.Title>
    <Card.Text>
      {movies.category}
    </Card.Text>
    <Button variant="success"><Link navlink to={"/Comment/"+ movies.asin }> Coments</Link></Button>
    
  </Card.Body>
</Card>
</Col>
    )   
})}
</Row>
<Button variant="success"><Link navlink to={"/CommentList/"}>All Coments</Link></Button>
</Container>
<Button className="mt-5" variant="success" onClick={this.showMore}>Show More</Button>

         </>
        )
    }
}



export default LatestRelease