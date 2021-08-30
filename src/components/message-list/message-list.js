import { useRef,} from "react";
import './App.css';
import {Button, Input, InputAdornment, makeStyles} from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import { handleChangeMessageValueFB} from "../../store/conversations";
import {
    // sendMessage,
    sendMessageWithThunk} from "../../store/messages"



const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.light.color,
    },
}));

export const MessageList = () => {
    const { roomId } = useParams()
    const classes = useStyles();
    const messages = useSelector(state => state.messages.messages[roomId] || [])
    const value = useSelector(state => state.conversations.conversations.find(
        conversation=> conversation.title === roomId,
        )?.value || ""
    )
    const dispatch = useDispatch()
    const ref = useRef()


    const handleSendMessage = () => {
        if (value){
            // dispatch(sendMessage({author: "User", message: value}, roomId))
            dispatch(sendMessageWithThunk({author: "User", message: value}, roomId))
        }
    }


    return (
        <>
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
                   onChange={(e)=> dispatch(handleChangeMessageValueFB(e.target.value, roomId))}
                   fullWidth={true}
                   placeholder={"Сообщение..."}
                   endAdornment={
                       <InputAdornment position={"end"}>
                       {value &&(<Button variant="contained" color="primary" onClick={handleSendMessage}                                                                >
                           send
                       </Button>)}
                   </InputAdornment>}
            />

        </>
    )
}
