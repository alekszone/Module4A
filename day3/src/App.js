import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WarningSign from './components/WarningSign'
import MyBadge from './components/MyBadge'
import SingleBook from './components/SingleBook'
import Allbooks from './components/Allbooks'
function App() {
const book ={
  fantasy :  require("./fantasy.json")
}


  return (
    <div className="App">
  <WarningSign title="hello from other side" />
  <MyBadge title="Another props" color="success" />
  <SingleBook  books={book.fantasy.slice(0,1)[0]}  />
<Allbooks books={book.fantasy.slice(0,50)}/>


    </div>
  );
}

export default App;
