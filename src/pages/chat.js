import {Switch, Route} from "react-router-dom"
import {MessageProvider, Layout, Header, ChatList, MessageList} from "../components"

export function Chat() {
    return <Switch>
        <Route path={["/chats/:roomId", "/chats"]}>
                <MessageProvider>
                    {([state, actions])=>(
                        <Layout
                            header={<Header/>}
                            chats={<ChatList {...state}/>}
                        >
                            <Route path="/chats/:roomId">
                                <MessageList {...state} {...actions}/>
                            </Route>
                        </Layout>
                    )}
                </MessageProvider>
        </Route>
        <Route path="*">
          <h2>чата нет</h2>
        </Route>
    </Switch>
}
