import {Switch, Route} from "react-router-dom"
import { Layout, Header, ChatList, MessageList} from "../components"

export function Chat() {
    return <Switch>
        <Route path={["/chats/:roomId", "/chats"]}>
            <Layout
                header={<Header/>}
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
