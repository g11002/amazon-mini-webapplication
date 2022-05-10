import React from 'react'
import './login.css';
import './nav.css';
import './index.css';
import {Link} from 'react-router-dom'

class FAQs extends React.Component {
    render() {
        return (
            <body>
                <div className="wrap2">
                    <div className="log">
                        <h2>FREQUENTLY ASKED QUESTIONS</h2>
                        <br/>
                        <br/>
                        <label>1. What is the site about?</label>
                        <p>Ans: basically a site to order food</p>
                        <br/>
                        <br/>
                        <label>2. How do you use this site?</label>
                        <p>Ans: log on to the site or sign up if you haven't , search for your favorite food and order from us </p>
                        <br/>
                        <br/>
                        <label>3. Is the membership free for this site?</label>
                        <p>Ans: Absolutely</p>
                        <br/>
                        <br/>
                        <label>4. Why do I need to sign up to your site?</label>
                        <p>Ans: Because we provide top-of-line service at affordable prices and right at your doorstep</p>
                        <Link to="/"><button type="button" class="cancelbtn">Back</button></Link>
                    </div>
                </div>
                
            </body>
        );
    }
}

export default FAQs