import React, { Component } from 'react'
import {Button,Card,Row,Col,Container,FormControl,Form } from  'react-bootstrap'
import SingleBook from './singleBook'

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
    books:category.fantasy,
    category: "fantasy",
    filterBooks: ""

}
movies = ["fantasy","history","horror","romance","scifi"]



movi=(event)=>{
    const singleMovie = event.currentTarget.value
this.setState({
    books:category[singleMovie],
    category:singleMovie
})
console.log(this.state.books) 
}


filter=(event)=>{
    if(event){
const single= this.state.books.filter((book) => book.title.toLowerCase().includes(event))
   
    this.setState({
        books:single,
        filterBooks:single
    }) }else{
        this.setState({
            books:category.fantasy 
        })
    }
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
          <Form inline  style={{marginLeft:"600px",marginBottom:"50px"}}>
              <FormControl  type="text" placeholder="Search" onChange={book=>this.filter(book.currentTarget.value)} className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
             


         {this.movies.map((categorys,key)=>{
             return(
 <Button variant="primary" value={categorys} key={key} onClick={this.movi}>{categorys}</Button>
         )})}
<Container>
<Row>
{this.state.books.slice(0,this.state.limit).map((movies,key)=>{   
     return(
   <SingleBook movies={movies} key={key} category={this.state.category} />
    )   
})}
</Row>

</Container>
<Button className="mt-5" variant="success" onClick={this.showMore}>Show More</Button>

         </>
        )
    }
}



export default LatestRelease