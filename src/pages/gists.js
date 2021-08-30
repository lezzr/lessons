// import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getGists, searchGistsByName} from "../store/gists";
import {useEffect, useState} from "react";
import debounce from "lodash.debounce"



// const API_URL_PUBLIC = (page)=> `https://api.github.com/gists/public?page=${page}`

// const useGists = ()=> {
//     const [gists, setGists] = useState([])
//     const [pending, setPending] = useState(false)
//     const [error, setError] = useState(null)
//
//     const getGists = async (page = 1)=>{
//         try{
//         setPending(true)
//
//         const response = await fetch(API_URL_PUBLIC(page))
//         const result = await response.json()
//             setGists(result)
//         } catch(e){
//             setError(e)
//         } finally{
//             setPending(false)
//         }
//
//     }
//
//     useEffect(()=> {
//         getGists()
//     }, [])
//
//     return{gists, pending, error, getGists}
// }
const searchGistDebounced = debounce((query, dispatch)=>{
    dispatch(searchGistsByName(query))
}, 1000)
export function Gists() {

    // const {gists, pending, error, getGists} = useGists()
    const {gistsPending, gists, gistsError} = useSelector(state => state.gists)

    const [search, setSearch] = useState("")

    const dispatch = useDispatch()



    useEffect(()=> {
        if (!gists.length){
            dispatch(getGists(1))
        }

    }, [dispatch, gists])

    useEffect(()=>{
        if(search){
            searchGistDebounced(search, dispatch)
        }
    },[search, dispatch])

    // if (gistsPending){
    //     return <h1>...Pending...</h1>
    // }
    // if (gistsError){
    //     return <h1>...Error...</h1>
    // }

    return(
        <div>
            <h1>Gist.</h1>
            {gistsError ? <h1>...Error...</h1>: <h1> /no errors yet/</h1>}

            <button
                onClick={()=> dispatch(getGists())}
            >Get Gists</button>
            <br/>
            <hr/>
            <input value={search} onChange={e => setSearch(e.target.value)}/>
            <hr/>
            <br/>

            {Array.from({length: 10}).map((_, index) => <button
                key={index}
                onClick={()=> dispatch(getGists(index + 1))}
            >page: {index + 1}</button>)}

            {gistsPending ? <h1>...Pending...</h1> : <ul>{gists.map((gist, index) => <li key={index}>{gist.description}</li>)}</ul>}


        </div>
    )
}
