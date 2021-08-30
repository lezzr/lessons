import {ThemeProvider, createTheme} from "@material-ui/core"
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom"
import React from 'react';
import ReactDOM from 'react-dom';
import {PersistGate} from "redux-persist/integration/react";
import {App} from './App';
import {Chat, Home, Profile, Gists, Login, SignUp} from "./pages"
// import Profile from "./pages/profile";
import {Provider} from 'react-redux'
import {persistor, store} from "./store";

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

const AppRend = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
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
                            <Route path="/login" component={Login} />
                            <Route path="/signup" component={SignUp} />
                            <Route path="/profile" component={()=>(
                                <Profile/>
                            )} />
                            <Route path="/gists" component={()=>(
                                <Gists/>
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
            </PersistGate>
        </Provider>
    )
}

ReactDOM.render(
  <React.StrictMode>
     <AppRend/>
  </React.StrictMode>,
  document.getElementById('root')
);

