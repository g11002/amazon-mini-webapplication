import React from 'react';
import ReactDOM from 'react-dom';
import './nav.css';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';

import reportWebVitals from './reportWebVitals';
import Login from './login'
import Signup from './signup'
import Footer from './footer'
import Contact from './contact'
import FAQs from './FAQs'

const routing = (
  <Router>
    <body>
      <div className="navbar">
        <nav>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to= "/contact">CONTACT US</Link></li>
            <li><Link to= "/FAQs">FAQs</Link></li>
            <li>
              <form className ="search">
                <input className="search_box" type="search" placeholder="SEARCH FOODS... " />
                <button className="submit_search" type="submit " form="button " value="Submit "><a href ="http://127.0.0.1:8000/overview">FIND FOOD</a></button>
              </form>
            </li>
            <li><Link to="/login">LOGIN</Link></li>
            <li><Link to="/signup">SIGN UP</Link></li>
          </ul>
        </nav>
        <Route exact path="/" component={App} />
        <Route path="/contact" component={Contact} />
        <Route path="/faqs" component={FAQs}/>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </div>
    </body>
    <Footer/>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
reportWebVitals();
