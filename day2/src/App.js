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




render(){



  return (
    <div className="App">
      <Router>
         <MyNav /> 
         <Jumbotron />
         <Switch> 
         <Route path="/Comment/:id/:category" >
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
