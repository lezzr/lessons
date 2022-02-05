import {ThemeProvider, createTheme} from "@material-ui/core"
import React from 'react';
import ReactDOM from 'react-dom';
import { App,} from './App';

const user = {name: "Test Name", className: "class Test Name"}
const handleClick = ()=>{
    console.log("clock")
}

const theme = createTheme({
    dark:{
        color: "#ff6333"
    },
    light:{
        color: "#c0ca33"
    }
})

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
    <App user={user} handleClick={handleClick}>
        <h1>Children App</h1>
    </App>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

