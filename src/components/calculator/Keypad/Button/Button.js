import React, { Component } from 'react'
import './Button.css'

class Button extends Component {
  render() {
    return (
      <div className="Button">
        <table>
          <tr>
            <td>C</td>
            <td>/</td>
            <td>X</td>
            <td>-</td>
          </tr>
          <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td rowSpan='2'>+</td>
          </tr>
          <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td rowSpan="2">=</td>
          </tr>
          <tr>
            <td>0</td>
            <td>.</td>
            <td></td>
          </tr>
        </table>
      </div>
    )
  }
}

export default Button;
