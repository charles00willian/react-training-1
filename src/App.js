import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    textLength : 0
  }

  showLengthHandler = event => this.setState({textLength: event.target.value.length});
  

  render() {
    return (
      <div className="App">
        <input type="text" 
        onChange={(event)=>this.showLengthHandler(event)}/>
        <p>{this.state.textLength}</p>
      </div>
    );
  }
}

export default App;
