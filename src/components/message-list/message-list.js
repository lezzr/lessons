import { useRef,} from "react";
import './App.css';
import {Button, Input, InputAdornment, makeStyles} from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Message } from "./message"

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.light.color,
    },
}));

export const MessageList = ({messages, value, sendMessage, handleChangeValue}) => {
    const classes = useStyles();
    // const [m, setMessage] = useState([
    //     { value: "hello", author: "tester" }
    // ])

    const ref = useRef()

    const handleSendMessage = () => {
        if (value){
            sendMessage({author: "User", message: value})
        }
    }

    // const [value2, setValue] = useState("")
    //
    // console.log(m, value2)
    // useEffect(()=>{
    //     ref.current.focus()
    //     const lastMsg = messages[messages.length - 1]
    //     if(lastMsg?.author !== "bot"){
    //         setTimeout(()=>{
    //             setMessage(state => [...state, {value: "bot message", author: "bot"}])
    //         }, 1500)
    //     }
    //
    //     return()=>{
    //         // clearTimeout(id)
    //     }
    // }, [messages])


    return (
        <>
            <div ref={ref}>
                {messages.map((message, id) => (
                    <Message key={id} {...message} />
                ))}
            </div>

            <List className={classes.root}>
                {messages.map((message, index) => (
                    <ListItem key={index}>
                        <ListItemAvatar>
                            <Avatar/>
                        </ListItemAvatar>
                        <ListItemText primary={message.author} secondary={message.message} />
                    </ListItem>
                ))}
            </List>

            <Input type="text"
                   inputRef={ref}
                   autoFocus={true}
                   className={"msg-input"}
                   value={value}
                   // defaultValue={value}
                   onChange={handleChangeValue}
                   fullWidth={true}
                   placeholder={"Сообщение..."}
                   endAdornment={<InputAdornment position={"end"}>
                       <Button variant="contained" color="primary" onClick={handleSendMessage}
                       >
                           send
                       </Button>
                   </InputAdornment>}
            />

        </>
    );
}
