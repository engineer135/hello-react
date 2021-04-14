import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';
import MyComponent from './LifeCycleSample'
import ErrorBoundary from './ErrorBoundary'

// 랜덤 색상 생성
// 16777215 = 16진수로 ffffff
function getRandomColor(){
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick = ()=>{
    this.setState({
      color: getRandomColor()
    });
  }

  render(){
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상 예~</button>
        <ErrorBoundary>
          <MyComponent color={this.state.color}></MyComponent>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
