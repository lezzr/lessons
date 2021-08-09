import {useEffect, useRef, useState} from "react";
import './App.css';
import {Button, Input, InputAdornment, makeStyles,} from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.light.color,
    },
}));

export const MessageList = () => {
    const classes = useStyles();
    const [messages, setMessage] = useState([
        { value: "hello", author: "tester" }
    ])
    const [value, setValue] = useState("")
    const ref = useRef(null)

    useEffect(()=>{
        ref.current.focus()
        const ifUser = messages[messages.length - 1]
        if(ifUser?.author !== "bot"){
            setTimeout(()=>{
                setMessage(state => [...state, {value: "bot message", author: "bot"}])
            }, 1500)
        }

        return()=>{
            clearTimeout()
        }
    }, [messages])


    return (
        <div className="App">
            <h1>testing messages</h1>
                <List className={classes.root}>
                    {messages.map((message, id) => (
                        <ListItem key={id}>
                            <ListItemAvatar>
                                <Avatar/>
                            </ListItemAvatar>
                            <ListItemText primary={message.author} secondary={message.value} />
                        </ListItem>
                    ))}
                </List>

            <Input type="text"
                   inputRef={ref}
                   autoFocus={true}
                   className={"msg-input"}
                   value={value}
                   onChange={(e) => setValue(e.target.value)}
                   fullWidth={true}
                   placeholder={"Сообщение..."}
                   endAdornment={<InputAdornment position={"end"}>
                       <Button variant="contained" color="primary" onClick={() => {
                           setMessage(state => [...state, {value, author: "Sender"}])
                           setValue("")
                       }}
                       >
                           send
                       </Button>
                   </InputAdornment>}
            />

        </div>
    );
}
