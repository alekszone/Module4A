import React from "react";
import { Badge, ListGroup } from "react-bootstrap";

class  CommentList extends React.Component{
constructor(props){
  super(props)
  this.state={
    comments: [],
    movieID:this.props.movieId,
  }}
componentDidMount=() =>{
  this.comments();
}
comments = async () =>{
const url = "https://striveschool.herokuapp.com/api/comments/"
const comments = await fetch(url + this.state.movieID,{
  headers: new Headers({
    Authorization: "Basic dXNlcjI6NExyOW5xSFpaWkROVXk3TA==",
  }),
})
.then((response) => response.json())
this.setState({comments:comments});
}
componentWillMount=() =>{
  console.log("bye")
}
render(){
  return( 
    <>
   {this.state.comments.map((comments ) =>{
return( 
    <ListGroup key={comments._id}>
      <ListGroup.Item>
        <Badge pill variant="info" className="mr-3">
          {comments.rate}
        </Badge>
        {comments.comment}
      </ListGroup.Item>
    </ListGroup>
  );
})}
  
  </> 
  )
  }
  
}
export default CommentList;
