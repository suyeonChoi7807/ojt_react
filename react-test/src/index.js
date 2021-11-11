import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom';
//Link, NavLink, useParam

function Home(){
  return(
    <div>
      <h2>HOME</h2>
      Home...
    </div>
  );
}

function Topics(){
  return(
    <div>
      <h2>Topics</h2>
      Topics...
    </div>
  );
}

function Contact(){
  return(
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}

function App(){
  return (
    <div>
      <h1>React Router DOM 예제</h1>
      <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      
      <Switch>
        <Route exact path="/"><Home></Home></Route>
        <Route path="/topics"><Topics></Topics></Route>
        <Route path="/contact"><Contact></Contact></Route>
      </Switch>

    </div>
  );
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));