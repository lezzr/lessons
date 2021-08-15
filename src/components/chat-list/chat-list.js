// import {useState} from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {makeStyles} from "@material-ui/core";
import {Link, useParams} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.dark.color,
    },
}));

export const ChatList = ({conversations}) => {
    const {roomId} = useParams()
    const classes = useStyles();

    // const [chats] = useState([
    //     { name: "chat1", id: "id-1" },
    //     { name: "chat2", id: "id-2" },
    //     { name: "chat3", id: "id-3" },
    // ])
    // const [selectedIndex, setSelectedIndex] = useState(0)
    return <div>
        <List className={classes.root} component="nav">
            {conversations.map((chat, index) => {
                // const currentMessages = allMessages[chat.title]

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

                            {/*handleListItemClick={()=> setSelectedIndex(index)}*/}
                            <ListItemText primary={chat.title} secondary={index} />
                        </ListItem>
                    </Link>
                )
            })}
        </List>
    </div>
}
