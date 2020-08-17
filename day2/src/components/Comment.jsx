import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'


 class Comment extends Component {
state={
    comments:""
  }
componentDidMount = async()=>{

let response = await fetch(" https://striveschool-api.herokuapp.com/api/comments/" + this.id,{
   headers: {
    'Authorization': 'Basic ' + btoa("user2:4Lr9nqHZZZDNUy7L")
    }
})

  let coments= await response.json()
  this.setState({
    comments:coments
  })
console.log("hello",coments)

}
id = this.props.match.params.id;


    render() {
       {console.log(this.id)}
        return (
            <div>
                
            </div>
        )
    }
}


export default  withRouter(Comment)
