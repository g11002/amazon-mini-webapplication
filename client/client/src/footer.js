import React from 'react'
import './nav.css';
import './index.css';
import img from './logo.jpg'
import { Route, Link, BrowserRouter as Router} from 'react-router-dom'

class Footer extends React.Component {
  render() {
      return (
        <div>
            <footer>
              <img src={img} alt="YUMM FOODS " />
              <hr />
                  <p className="abt">ABOUT US</p>
                  <p>WE ARE GROUP OF ENGINEERS FROM PESU-EC DEVELOPING CODES.</p>
                  <p>JAYANTH JEEVAN HIMANI</p>
                  <p>HEAD TO OUR CONTACT US SECTION IF YOU WISH TO LEAVE US FEEDBACK</p>
                  <hr className= "gap"/>
              <hr color="#ccc" />
              <div>WEB_TECH_PROJECT 2020</div>
            </footer>
        </div>
        );
    }
  }
export default Footer