import React, { Component } from "react";


const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props){
    super(props)
    this.state = {
      count:0,
    }
  }

  hundleplusbutoon = () =>{
    this.setState({count:this.state.count + 1})
  }

  hundleminusbutton = () =>{
    this.setState({count: this.state.count - 1})
  }

  render(){
    console.log("render")
    return(
      <React.Fragment>
        <div>counter : {this.state.count}</div>
        <button onClick={this.hundleplusbutoon}>+1</button>
        <button onClick={this.hundleminusbutton}>-1</button>
      </React.Fragment>)
  }
}

export default App;
