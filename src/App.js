import React ,{Component } from "react";

class App extends Component {
  render() { 
    // const greeting = "Bye"
    // const dom = <h1 className = "foo">{greeting}  Bye world</h1>;
    return(
      <React.Fragment>
        <label htmlFor ="bar">bar</label>
        <input type = "text" onClick ={() => {console.log("my clicked")}} onChange = {() => {console.log("hi")}}/>
      </React.Fragment>
    )
    // const dom = <input type = "text" onClick ={() => {console.log("my clicked")}} onChange = {() => {console.log("hi")}}/>
    // return dom
  }
}
export default App;
