import {ThemeProvider, createTheme} from "@material-ui/core"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import React from 'react';
import ReactDOM from 'react-dom';
import { App,} from './App';
import {Chat} from "./pages"

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
      <BrowserRouter>
      <ThemeProvider theme={theme}>
          <Switch>
              <Route path="/chat" component={()=>(
                  <App user={user} handleClick={handleClick}>
                      <h1>Children App</h1>
                  </App>
              )} />
              <Route path="/chats" component={()=>(
                  <Chat/>
              )} />
              <Route path="*" component={()=>(
                                        <h1>404now</h1>
              )} />

          </Switch>
      </ThemeProvider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

