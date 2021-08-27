import {INCREMENT, DECREMENT, TOGGLE_NAME} from "./types"

export const increment = () => ({type: INCREMENT})
export const decrement = () => ({type: DECREMENT})
export const toggleName = () => ({type: TOGGLE_NAME})
