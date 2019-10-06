import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    textLength : 0,
    text: []
  }

  showLengthHandler = event => this.setState({textLength: event.target.value.length});
  
  textHandler = event => this.setState({text: event.target.value.split('')});

  deleteCharHandler = charIndex =>{
    let textArr = [...this.state.text];

    textArr.splice(charIndex,1);
    this.setState({text: textArr});
  }

  render() {
    
    let chars = (
      <div>
        {this.state.text.map((char, index) => {
          return(
            <CharComponent 
              key = {index}
              char={char}
              delete={() => this.deleteCharHandler(index)}
            />
          )
         })
        }
      </div>
    )
    
    return (
      <div className="App">
        <input type="text" 
        onChange={(event)=>{this.showLengthHandler(event); this.textHandler(event)}}/>
        <p>{this.state.textLength}</p>
        <ValidationComponent
          textLength = {this.state.textLength}
        />
        {chars}
      </div>
    );
  }
}

export default App;
