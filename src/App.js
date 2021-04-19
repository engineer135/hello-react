import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import './App.css';
import MyComponent from './Info'

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={()=>{setVisible(!visible);}}>{visible?'숨기기':'보이기'}</button>
      <hr/>
      {visible && <MyComponent/>}
    </div>
  );
};

export default App;
