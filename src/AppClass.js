import React, {Component} from 'react';
import './App.css';

class AppClass extends Component {
  render(){
    const name = '리액트.. 클래스형 컴포넌트';
    return <div className="react">{name}</div>;
  }
}

export default AppClass;
