import {sendMessage} from "./actions";
import {clearMessageValue} from "../conversations";
import {db} from "../../api/firebase";
import {GET_MESSAGES_FB} from "./types";
import {nanoid} from "nanoid";

export const sendMessageWithThunk = ({author, message}, roomID) => (dispatch) => {
    dispatch(sendMessage({author, message}, roomID))
    dispatch(clearMessageValue(roomID))
    //
    // if(message.author === "User"){
    //     setTimeout(
    //         ()=> dispatch(
    //             sendMessage(
    //                 {author: "Bot", message: "Hello im Bot answer from THUNK"},
    //                 roomID)
    //             ), 2500
    //     )
    // }

    db.ref("messages")
        .child(roomID)
        .push({id: nanoid(), author, message})
}

export const getMessagesFB = () => (dispatch) => {
    db.ref("messages")
        .get()
        .then((snapshot)=>{
        const messages = {}

        snapshot.forEach((snap)=> {
            messages[snap.key] = Object.values(snap.val())
        })
        dispatch({type: GET_MESSAGES_FB, payload: messages})
    })
}
