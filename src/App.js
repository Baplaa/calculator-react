import React, { Component } from 'react';
import './App.css';
import Button from './components/button';
import Input from './components/input';
import Clear from './components/clear';
import Percent from './components/percent';
import * as math from 'mathjs';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      input: ""
    };
  };

  concatenate_input = val => {
    this.setState({input: this.state.input + val});
  }

  evaluate = () => {
    try {
      this.setState({input: math.evaluate(this.state.input)})
    } catch(err) {
      this.setState({input: 'ERROR'})
    }
  }

  render() {
    return (
      <div className="app">
      <div className='calc-box'>
        <Input input={this.state.input}></Input>
        <div className='calc-row'>
          <Clear clears={() => this.setState({input: ""})}>Clear</Clear>
          <Percent clicked={this.concatenate_input}>%</Percent>
          <Button clicked={this.concatenate_input}>/</Button>
        </div>
        <div className='calc-row'>
          <Button clicked={this.concatenate_input}>7</Button>
          <Button clicked={this.concatenate_input}>8</Button>
          <Button clicked={this.concatenate_input}>9</Button>
          <Button clicked={this.concatenate_input}>*</Button>
        </div>
        <div className='calc-row'>
          <Button clicked={this.concatenate_input}>4</Button>
          <Button clicked={this.concatenate_input}>5</Button>
          <Button clicked={this.concatenate_input}>6</Button>
          <Button clicked={this.concatenate_input}>-</Button>
        </div>
        <div className='calc-row'>
          <Button clicked={this.concatenate_input}>1</Button>
          <Button clicked={this.concatenate_input}>2</Button>
          <Button clicked={this.concatenate_input}>3</Button>
          <Button clicked={this.concatenate_input}>+</Button>
        </div>
        <div className='calc-row'>
          <Button> </Button>
          <Button clicked={this.concatenate_input}>0</Button>
          <Button clicked={this.concatenate_input}>.</Button>
          <Button clicked={() => this.evaluate()}>=</Button>
        </div>
      </div>
    </div>
    );
  };
};

export default App;
