import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from "redux-thunk";
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import {profileReducer} from "./profile";
import {conversationsReducer} from "./conversations";
import {messagesReducer} from "./messages";
import {logger, botSendMessage, timeoutScheduler, report} from './middlawares'

const persistConfig = {
    key: "root",
    storage,
    blacklist:["conversations", "messages"],
    whitelist:["profile"]
}

 export const persistreducer = persistReducer(persistConfig, combineReducers({
     profile:  profileReducer,
     conversations: conversationsReducer,
     messages: messagesReducer
 }),)

export const store = createStore(
    persistreducer,
    compose(
    applyMiddleware(report, thunk, logger, botSendMessage, timeoutScheduler,),
    window.__REDUX_DEVTOOLS_EXTENSION__
        && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export const persistor = persistStore(store)
