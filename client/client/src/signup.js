import React from 'react'
import './login.css';
import './nav.css';
import './index.css';
import img from './logo.jpg'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

class Signup extends React.Component {
  render() {
    return (
      <body>
        <div className="log">
          <form>
            <h2>SIGN UP</h2>
              <div>
                <img src={img} alt=""/>
              </div>
              <div className="container">
                <label><b>Enter email id</b></label>
                <input type="text" placeholder="ID" name="uname" required />

                <label><b>Password</b></label>
                <input type="password" placeholder="Password" name="psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required/>

                <label><b>Enter Password Again</b></label>
                <input type="password" placeholder="Password" name="psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required/>

                <label><b>Contact Number</b></label>
                <input type="text" placeholder="1234567890" name="num" required/>

                <label className="agree">
                    <input type="checkbox" value=""/>Agree to T&C
                </label>

                <button type="submit">REGISTER</button>

                <Link to="/"><button type="button" className="cancelbtn">Cancel</button></Link>
              </div>
          </form>
        </div>
      </body>
    )
  }
}
export default Signup