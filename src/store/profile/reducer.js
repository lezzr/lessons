import {INCREMENT, DECREMENT, TOGGLE_NAME} from "./types"

const initialState = {
    count: 2,
    nameVisible: true,
    user:{
        id: 1,
        name: "Test Vasya"
    }
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case TOGGLE_NAME:
            return {
                ...state,
                nameVisible: !state.nameVisible
            }
        default:
            return state
    }
}
