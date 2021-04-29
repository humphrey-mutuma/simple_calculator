import React, { Component } from 'react';
import Display from '../Display/Display';
import './Button.css';

class Button extends Component {
  constructor(props){
    super(props);
    this.state ={
      value:''
    }
  }

  clickHandler = (e) => {
    const value = e.target.value;
    this.setState({value: e.target.value })
  }

  render() {

    return (
      <div className="Button">
        <Display value={this.state.value} />
        <table>
          <tr>
            <td><button onClick={this.clickHandler} value="Clear">C</button></td>
            <td><button onClick={this.clickHandler} value="/">/</button></td>
            <td><button onClick={this.clickHandler} value="X">X</button></td>
            <td><button onClick={this.clickHandler} value="-">-</button></td>
          </tr>
          <tr>
            <td><button onClick={this.clickHandler} value="7">7</button></td>
            <td><button onClick={this.clickHandler} value="8">8</button></td>
            <td><button onClick={this.clickHandler} value="9">9</button></td>
            <td rowSpan='2'><button onClick={this.clickHandler} value="+">+</button></td>
          </tr>
          <tr>
            <td><button onClick={this.clickHandler} value="4">4</button></td>
            <td><button onClick={this.clickHandler} value="5">5</button></td>
            <td><button onClick={this.clickHandler} value="6">6</button></td>
          </tr>
          <tr>
            <td><button onClick={this.clickHandler} value="1">1</button></td>
            <td><button onClick={this.clickHandler} value="2">2</button></td>
            <td><button onClick={this.clickHandler} value="3">3</button></td>
            <td rowSpan="2"><button onClick={this.clickHandler} value="=">=</button></td>
          </tr>
          <tr>
            <td colSpan="2"><button onClick={this.clickHandler} value="0">0</button></td>
            <td><button onClick={this.clickHandler} value=".">.</button></td>
          </tr>
        </table>
      </div>
    )
  }
}

export default Button;
