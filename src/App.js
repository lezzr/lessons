import {MessageList, ChatList} from './components'
import {Grid, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme)=> {
    return {
        root:{
            flexGrow:1,
            background: theme.light.color
        },
    }
})

export function App() {
    const classes = useStyles()
    return <div className={classes.root}>
        <Grid container={true} spacing={3}>
            <Grid item xs={3}>
        <ChatList/>
            </Grid>
            <Grid item xs={6}>
        <MessageList/>
            </Grid>
        </Grid>
    </div>
}

