import React, { Component } from 'react';
import './App.css';
import Editor from './Editor';
import Preview from './Preview';


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({
      input: e.target.value
    });
  }
  
  render() {
    const marked = require("marked");
    return (
      <div className="App">
        <Editor handleChange={this.handleInput}/>
        <Preview markedInput={marked(this.state.input)}/>
      </div>
    );
  }
}

export default App;
