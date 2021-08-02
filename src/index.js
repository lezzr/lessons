import React from 'react';
import ReactDOM from 'react-dom';
import { App, AppClaas, AppWithoutJSX, Message } from './App';

const user = {name: "Test Name", className: "class Test Name"}
const handleClick = ()=>{
    console.log("clock")
}
const msgs = {message: "My Message"}

ReactDOM.render(
  <React.StrictMode>
    <App user={user} handleClick={handleClick}>
        <h1>Children App</h1>
    </App>
    <Message msgs={msgs}/>
    <AppClaas user={user} handleClick={handleClick}/>
    <AppWithoutJSX/>
  </React.StrictMode>,
  document.getElementById('root')
);

