import {ThemeProvider, createTheme} from "@material-ui/core"
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom"
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {Chat, Home, Profile} from "./pages"
// import Profile from "./pages/profile";
import {Provider} from 'react-redux'
import {store} from "./store";

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
      <Provider store={store}>
      <BrowserRouter>
      <ThemeProvider theme={theme}>
          <Switch>
              <Route exact path="/" component={()=>(
                  <Home/>
              )} />
              <Route path="/chat" component={()=>(
                  <App user={user} handleClick={handleClick}>
                      <h1>Children App</h1>
                  </App>
              )} />
              <Route path="/chats" component={()=>(
                  <Chat/>
              )} />
              <Route path="/profile" component={()=>(
                  <Profile/>
              )} />
              <Route path="*" component={()=>(
                  <Redirect to="/chats/room1" />
              )} />
              <Route exact path="chats/*" component={()=>(
                  <Redirect to="/chats/room1" />
              )} />

          </Switch>
      </ThemeProvider>
      </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

