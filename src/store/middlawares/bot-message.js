import {SEND_MESSAGE} from "../messages/types";
import {sendMessage} from "../messages";

export const botSendMessage = (store) => (next) => (action) => {
    if(
        action.type === SEND_MESSAGE
        && action.payload.message.author === "User"
    ){
        setTimeout(()=>{
            store.dispatch(sendMessage({author: "Bot", message: "Hello im Bot answer from middleware"}, action.payload.roomID))
        }, 1000)
    }
    return next(action)
}
