import React from "react";

const App = () => {
const profiles = [
  {name:"Taro",age:10},
  {name: "hanako",age:5},
  {name:"No name"}
]
  return (
  <div>
    {
      profiles.map((profile,index) => {
        return <User key = {index} name = {profile.name} age = {profile.age}/>
      })
    }
    {/* <User name = {"Taro"} age = {10}/>
    <User name = {"Hanako"} age = {5}/> */}
  </div>)
}

const User = (props) => {
  return <div>hi! , I am {props.name}. {props.age} years old</div>
}

User.defaultProps = {
  age: 1
}

export default App;
