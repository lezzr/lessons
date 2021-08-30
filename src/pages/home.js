import {Link} from "react-router-dom"
export function Home(){
    return <div>
    <Link to="/chats/room1">Chats</Link>
        <br/>
    <Link to="/profile">Profile</Link>
        <br/>
    <Link to="/login">Login</Link>
    </div>
}
