import React from 'react'
import './login.css';
import './nav.css';
import './index.css';
import img from './logo.jpg'
import { Route, Link, BrowserRouter as Router} from 'react-router-dom'

class Login extends React.Component {
  render() {
    return (
      <body>
        <div className ="log">
          <form action="#">
             <h2>LOGIN</h2>
              <div>
                <img src={img} alt=""/>
              </div>
              <div className="container">
                <label><b>Username</b></label>
                <input type="text" placeholder="Username" name="uname" required />

                <label><b> Password</b></label>
                <input type="password" placeholder="Password" name="psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />

                <label className="remember">
                  <input type="checkbox" value="" />remember me
                </label>
                  
                <button type="submit">LOGIN</button>
                  
                <Link to="/"><button type="button" class="cancelbtn">Cancel</button></Link>
                <span className="psw ">Forgot password?</span>
              </div>
          </form>
        </div>
      </body> 
    )
  }
}
export default Login