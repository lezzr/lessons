import {SEND_MESSAGE} from "./types";

const initialState = {
    messages: {
        room1: [{message: "hello", author: "tester", id: new Date()}],
        room2: [{message: "hello2", author: "tester", id: new Date()}],
        room3: [{message: "hello33", author: "tester", id: new Date()}]
    }

}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type){
        case SEND_MESSAGE:
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [action.payload.roomID]: [
                        ...state.messages[action.payload.roomID],
                        {...action.payload.message, id: new Date()}]
                }
            }
        default:
            return state
    }
}
