import styles from "./header.module.css"
import {Button} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom"
import {firebaseApp} from "../../api/firebase";

const signOut = () =>{
    firebaseApp.auth().signOut()
}

export function Header({session}){
    console.log(session)
    return <div className={styles.header}>
        <Button variant="contained" color="primary"><Link to="/profile">Profile</Link></Button>
        <Button variant="contained" color="primary"><Link to="/gists">Gists</Link></Button>
        <Button variant="contained" color="primary"><Link to="/login">Login</Link></Button>
        <Button variant="contained" color="primary"><Link to="/chats/room1">Chats</Link></Button>
        <Button variant="contained" color="primary"><Link to="/signup">Sign Up</Link></Button>
        {session?.email && (<Button onClick={signOut} variant="contained" color="primary">{session.email}</Button>)}
    </div>
}
