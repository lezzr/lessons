import {useState} from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.dark.color,
    },
}));

export const ChatList = () => {
    const classes = useStyles();
    const [chats] = useState([
        { name: "chat1", id: "id-1" },
        { name: "chat2", id: "id-2" },
        { name: "chat3", id: "id-3" },
    ])
    return <div>
        <List className={classes.root}>
            {chats.map((chat, id) => (
                <ListItem button={true} key={id}>
                    <ListItemText primary={chat.name} secondary={chat.id} />
                </ListItem>
            ))}
        </List>
    </div>
}
