import {db} from "../../api/firebase";
import {GET_CONVERSATIONS_FB} from "./types";
import {handleChangeMessageValue} from "./actions";
import debounce from "lodash.debounce";

export const getConversationsFB = () => (dispatch) => {
    db.ref("conversations").on("value", (snapshot)=>{
        const conversations = []

        snapshot.forEach((snap)=> {
            // console.log("snap.val()", snap.val())

            conversations.push(snap.val())
        })
        dispatch({type: GET_CONVERSATIONS_FB, payload: conversations})
    })
}

const cb = debounce(async ({messageValue, roomID}) => {
    db.ref("conversations")
    .child(roomID)
    .update({title: roomID, value: messageValue})
}, 500)

export const handleChangeMessageValueFB =
    (messageValue, roomID) => async (dispatch) => {

    await cb({messageValue, roomID})

    dispatch(handleChangeMessageValue(messageValue, roomID))
}
