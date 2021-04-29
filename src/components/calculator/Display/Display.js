import React, { Component } from 'react'
import './Display.css'


export default class Display extends Component {
  constructor(props){
    super(props);
    this.state={
      value:''
    }
  }

  // onInputCange = () => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }
  render() {
    return (
      <div className="Display">
        <form >
          <input value={this.props.value} type="text"/>
        </form>
      </div>
    )
  }
}
