import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';

class App extends Component {

  //Using State
state = {

  username:"Jenson"
}

usernameHandler = (event) => {
this.setState({username:event.target.value})

}
render(){

  return (
    <div className="App">
      
          <h1>React Basics Assignment-1</h1>

      {/* Using Event Handler */}
      <UserInput changed = {this.usernameHandler} currentName = {this.state.username}>
      
      </UserInput>
      <h5>Using Event Handler and State</h5>
      {/* Using State */}
    <UserOutput name={this.state.username}>Good Morning!</UserOutput>
    {/* Using Props */}
<h5>Using Props</h5>
    <UserOutput name="Jason">Good Morning!</UserOutput>

    </div>
  );
  
}


}


export default App;
