import React, { Component } from 'react';
import Timer from './Timer'
import { render } from '@testing-library/react';

class App extends Component{
  
  render(){
  return (
    <div className="App">
     
      <Timer/>
      </div>
  );
  }
}

export default App;
