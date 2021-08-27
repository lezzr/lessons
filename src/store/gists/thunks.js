
import {gistsStart, gistsSuccess, gistsError, searchGistsStart, searchGistsSuccess, searchGistsError} from "./actions";

// import {getGistsApi} from "../../api/gists";



export const getGists = (page = 1) => async (dispatch, getState, api) => {
    try{
        dispatch(gistsStart())
        const {data} = await api.getGistsApi(page)
        dispatch(gistsSuccess(data))
    } catch(e) {
        dispatch(gistsError(e))
    }

}

export const searchGistsByName = (name) => async (dispatch, getState, api) => {
    try{
        dispatch(searchGistsStart())
        const {data} = await api.searchGistsByName(name)
        dispatch(searchGistsSuccess(data))
    } catch(e) {
        dispatch(searchGistsError(e))
    }

}
