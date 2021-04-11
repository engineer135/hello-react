import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';
import MyComponent from './ScrollBox'

// 컴포넌트에 ref를 달고 컴포넌트 내부 메서드를 아래처럼 사용할수도 있어요
// ref로 다른 컴포넌트끼리 데이터 교류는 하지 말것. 유지보수 힘듦. 
// ref는 최후의 보루. 항상 ref 사용하지 안호 원하는 기능 구현 가능한지 고려 후에 활용하자.
class App extends Component {
  render(){
    return (
      <div>
        <MyComponent ref={(ref)=>this.scrollBox=ref}>나는 칠드런</MyComponent>
        <button onClick={()=>this.scrollBox.scrollToBottom()}>맨밑으로!</button>
      </div>
    );
  }
}

export default App;
