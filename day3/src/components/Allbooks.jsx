import React,{Component} from 'react'
import {Form,FormControl,Button} from 'react-bootstrap'
import SingleBook from './SingleBook'

export default class Allbooks extends Component {
state={

    books:this.props.books
}
filter = (event)=>{
if(event){
  const book =  this.state.books.filter(book =>book.title.toLowerCase().includes(event))
  this.setState({
      books:book
  })
}else{
    this.setState({books:this.props.books})
}


}
render(){
{console.log(this.props.books)} 
{console.log(this.state.books)}  

return (
        <div>
      <Form inline>
      <FormControl type="text" placeholder="Search"  onChange={(event)=>this.filter(event.currentTarget.value)} className="mr-sm-2" />
       </Form>
{this.state.books.map(singleBook=><SingleBook books={singleBook}/>)}
 </div>
    )
}
}

