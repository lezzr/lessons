import {GET_GISTS_START, GET_GISTS_SUCCESS, GET_GISTS_ERROR, SEARCH_GISTS_SUCCESS, SEARCH_GISTS_ERROR, SEARCH_GISTS_START} from "./types"

export const gistsStart = () => ({ type: GET_GISTS_START })
export const gistsSuccess = (gists) => ({type: GET_GISTS_SUCCESS, payload: gists})
export const gistsError = (error) => ({type: GET_GISTS_ERROR, payload: error})

export const searchGistsStart = () => ({ type: SEARCH_GISTS_START})
export const searchGistsSuccess = (gists) => ({ type: SEARCH_GISTS_SUCCESS, payload: gists})
export const searchGistsError = (error) => ({ type: SEARCH_GISTS_ERROR, payload: error})
