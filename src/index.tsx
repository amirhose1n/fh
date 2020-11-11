import React from 'react';
import ReactDOM from 'react-dom';
import Login from '@pages/login/index.tsx';
class Child extends React.Component{
  render(){
    return( <Login/> )
  }
}

ReactDOM.render(
  <React.StrictMode>
      <Child/>
  </React.StrictMode>,
  document.getElementById('app')
);
