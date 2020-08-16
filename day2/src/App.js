import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav'
import Jumbotron from './components/Welcome'
import Footer from './components/Footer'
import LatestRelease from './components/LatestRelease'
import CommentList from './components/CommentList'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Comment from './components/Comment'
class App extends Component {

  state={
    comments:[]
  }
componentDidMount = async()=>{
 
let response = await fetch("https://striveschool-api.herokuapp.com/api/comments",{
  headers: {
    'Authorization': 'Basic ' + btoa("user16:c9WEUxMS294hN6fF"),
    'Content-Type': 'application/json'  
}
})

  let coments= await response.json()
  this.setState({
    comments:coments
  })
console.log("hello",coments)

}




render(){



  return (
    <div className="App">
      <Router>
         <MyNav /> 
         <Jumbotron />
         <Switch> 
         <Route path="/Comment" >
  <Comment />
  </Route> 
  <Route path="/CommentList" >
  <CommentList />
  </Route> 
   <LatestRelease />
         </Switch> 
     
      <Footer />
     </Router>
    </div>
  );
}
}

export default App;
