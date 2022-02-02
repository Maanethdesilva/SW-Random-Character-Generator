import { render } from "@testing-library/react"


import React from 'react';

class Item extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      clicks: 0
    }
  }

  clickMe(){
    this.setState({
      clicks: this.state.clicks + 1
    })
    //alert("hello there "+ this.props.name);
  }
  
  render(){
    return (
      <div>
        <h1 onClick={() => this.clickMe()}>Hello there <small>{this.props.name}</small></h1>
        <p>Number of clicks is {this.state.clicks}</p>
      </div>
    )
  }
}

export default Item;