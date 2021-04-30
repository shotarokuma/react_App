import React from "react";
import PropTypes from "prop-types"

const App = () => {
const profiles = [
  {name:"Taro",age:10},
  {name: "hanako",age:20}
]
  return (
  <div>
    {
      profiles.map((profile,index) => {
        return <User key = {index} name = {profile.name} age = {profile.age}/>
      })
    }
  </div>)
}

const User = (props) => {
  return <div>hi! , I am {props.name}. {props.age} years old</div>
}

User.propTypes = {
  name:PropTypes.string,
  age:PropTypes.number.isRequired
}

export default App;
