import { useDispatch, useSelector} from 'react-redux'
import { toggleName} from "../store/profile/"
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

export function Profile ({session}){
    const userName = useSelector((state) => state.profile.user.name)
    const nameVisible = useSelector((state) => state.profile.nameVisible)
    const dispatch = useDispatch()
    return <div>

        {nameVisible && <h2>User Name: {userName}</h2>}
        {session?.email  && nameVisible && <h2>User Email: {session.email}</h2>}
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
