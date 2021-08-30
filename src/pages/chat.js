import {Switch, Route} from "react-router-dom"
import { Layout, ChatList, MessageList} from "../components"
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getConversationsFB} from "../store/conversations";
import {getMessagesFB} from "../store/messages";

export function Chat() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getConversationsFB())
        dispatch(getMessagesFB())
    }, [dispatch])
    return <Switch>
        <Route path={["/chats/:roomId", "/chats"]}>
            <Layout
                chats={<ChatList />}
            >
                <Route path="/chats/:roomId">
                    <MessageList />
                </Route>
            </Layout>
        </Route>
        <Route path="*">
          <h2>чата нет</h2>
        </Route>
    </Switch>
}
