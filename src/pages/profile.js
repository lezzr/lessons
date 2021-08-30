import { useDispatch, useSelector} from 'react-redux'
import { toggleName} from "../store/profile/"
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import React from "react";

// function ProfileWithHooks(){
//     const count = useSelector((state) => state.count)
//     const dispatch = useDispatch()
//
//     return<div>
//         <h2>count hook ---- {count}</h2>
//         <button onClick={()=> dispatch(increment())}>incr</button>
//         <button onClick={()=> dispatch(decrement())}>dec</button>
//     </div>
// }

export function Profile (
    // {count, increment, decrement}
){
    // const count = useSelector((state) => state.profile.count)
    const userName = useSelector((state) => state.profile.user.name)
    const nameVisible = useSelector((state) => state.profile.nameVisible)
    const dispatch = useDispatch()
    return <div>
            <Button variant="contained" color="primary"><Link to="/chats/room1">GO CHAT1</Link></Button>
            <br/>
            {/*<h2>profile here</h2>*/}
            {/*<h2>count here ins ---- {count}</h2>*/}
            {/*<button onClick={()=> dispatch(increment())}>incr ins</button>*/}
            {/*<button onClick={()=> dispatch(decrement())}>dec ins</button>*/}
            {/*<br/>*/}
        {/*<ProfileWithHooks/>*/}
        {nameVisible && <h2>User Name: {userName}</h2>}
            <input
                type="checkbox"
                value={nameVisible}
                checked={nameVisible}
                onChange={()=> dispatch(toggleName())}
            />
        </div>

}

// const mapStateToProps = (state) => {
//     return {
//         count: state.count
//     }
// }
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         increment: () => dispatch(increment()),
//         decrement: () => dispatch(decrement())
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Profile)
// export default Profile
