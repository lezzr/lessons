import React from 'react';
import ReactDOM from 'react-dom';
import { App,} from './App';

const user = {name: "Test Name", className: "class Test Name"}
const handleClick = ()=>{
    console.log("clock")
}

ReactDOM.render(
  <React.StrictMode>
    <App user={user} handleClick={handleClick}>
        <h1>Children App</h1>
    </App>
  </React.StrictMode>,
  document.getElementById('root')
);

