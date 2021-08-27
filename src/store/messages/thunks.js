import {sendMessage} from "./actions";
import {clearMessageValue} from "../conversations";

export const sendMessageWithThunk = (message, roomID) => (dispatch, getState) => {
    dispatch(sendMessage(message, roomID))
    dispatch(clearMessageValue(roomID))

    if(message.author === "User"){
        setTimeout(
            ()=> dispatch(
                sendMessage(
                    {author: "Bot", message: "Hello im Bot answer from THUNK"},
                    roomID)
                ), 2500
        )
    }
}
