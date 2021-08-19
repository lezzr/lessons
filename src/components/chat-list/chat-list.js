// import {useState} from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {makeStyles} from "@material-ui/core";
import {Link, useParams} from "react-router-dom"
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.dark.color,
    },
}));

export const ChatList = () => {
    const {roomId} = useParams()
    const classes = useStyles();
    const {conversations} = useSelector(state => state.conversations)
    const messages = useSelector(state => state.messages.messages[roomId])
    const lastMessage = messages[messages.length -1]

    return <div>
        <List className={classes.root} component="nav">
            {conversations.map((chat, index) => {


                return (
                    <Link
                        key={index}
                        to={chat.title}
                    >
                        <ListItem
                            button={true}
                            title={chat.title}
                            key={index}
                            selected={roomId === chat.title}
                        >


                            <ListItemText primary={chat.title} secondary={`${lastMessage.author}: ${lastMessage.message}`} />
                        </ListItem>
                    </Link>
                )
            })}
        </List>
    </div>
}
