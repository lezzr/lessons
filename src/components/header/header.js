import styles from "./header.module.css"
import {Button} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom"

export function Header(){
    return <div className={styles.header}>
        <Button variant="contained" color="primary"><Link to="/profile">Profile</Link></Button>
        <Button variant="contained" color="primary"><Link to="/gists">Gists</Link></Button>
    </div>
}
