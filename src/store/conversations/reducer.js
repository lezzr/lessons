import {HANDLE_CHANGE_MESSAGE_VALUE, CLEAR_MESSAGE_VALUE} from  './types'
const initialState = {
    conversations: [
        {title:"room1", value:""},
        {title:"room2", value:""},
        {title:"room3", value:""}
    ]
}

const updateConversations = (state, roomID, value) => state.conversations.map(convetsation=>{
    return convetsation.title === roomID
        ? {...convetsation, value: value}
        : convetsation
})

export const conversationsReducer = (state = initialState, action) => {
    switch (action.type){
        case HANDLE_CHANGE_MESSAGE_VALUE:
            return {
                ...state,
                conversations: updateConversations(state, action.payload.roomID, action.payload.value)
            }
        case CLEAR_MESSAGE_VALUE:{
            return {
                ...state,
                conversations: updateConversations(state, action.payload, "")
            }
        }
        default:
            return state
    }
}
