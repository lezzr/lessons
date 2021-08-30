import {ThemeProvider, createTheme} from "@material-ui/core"
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom"
import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {PersistGate} from "redux-persist/integration/react";
import {db, firebaseApp} from "./api/firebase";
import {App} from './App';
import {Chat, Home, Profile, Gists, Login, SignUp} from "./pages"
import {Provider} from 'react-redux'
import {persistor, store} from "./store";
import {Header, PrivateRoute, PublicRoute} from "./components";

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

const addConversation = () =>{
    db.ref("conversations").child("room2").set({title: "room2", value:"test2"})
}
const addMessage = (roomId) =>{
    db.ref("messages").child("room2").push({id: 1, author: "User", message: "room2 message"})
}

const AppRend = () => {
    const [session, setSession] = useState(null)

    useEffect(()=>{
        firebaseApp.auth().onAuthStateChanged((user)=> {
            if(user){
                setSession(user)

            } else {
                setSession(null)
            }
        })
    }, [])

    useEffect(()=> {
        db.ref("conversations").on("value", (snapshot)=>{
            const conversations = []

            snapshot.forEach((snap)=> {
                // console.log("snap.val()", snap.val())

                conversations.push(snap.val())
            })
            console.log("conversations", conversations)
        })
    }, [])


    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <ThemeProvider theme={theme}>
                        <button onClick={addMessage}>addMessage to 1</button>
                        <button onClick={addConversation}>addConversation</button>
                        <Header session={session}/>
                        <Switch>
                            <Route exact path="/" component={()=>(
                                <Home/>
                            )} />
                            <PrivateRoute isAuth={session} path="/chat" component={()=>(
                                <App user={user} handleClick={handleClick}>
                                    <h1>Children App</h1>
                                </App>
                            )} />
                            <PrivateRoute isAuth={session} path="/chats" component={()=>(
                                <Chat/>
                            )} />
                            <PublicRoute isAuth={session} path="/login" component={Login} />
                            <PublicRoute isAuth={session} path="/signup" component={SignUp} />
                            <PrivateRoute isAuth={session}  path="/profile" component={()=>(
                                <Profile session={session}/>
                            )} />
                            <PrivateRoute isAuth={session} path="/gists" component={()=>(
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

