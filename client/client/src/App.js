import './App.css';
import './index.css';
import './nav.css';
import './login.css';

import React , {Component} from 'react';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
    .then(res => res.text())
    .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render(){
    return (
      <body>
        <div className="App">
          <div className="content">
            <h1>HOME</h1>
            <p>its a blog</p>
            <p>its a blog</p>
            <p>its a blog</p>
            <p>its a blog</p>
            <p>its a blog</p>
            <hr/> 
            <p className="App-intro">{this.state.apiResponse}</p>
          </div>  
        </div>
      </body>
    )
  }
}

export default App;
