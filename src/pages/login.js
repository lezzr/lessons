import {Header, LoginForm, AuthTemplate} from "../components";
import {Link} from "react-router-dom";
// import {firebaseApp} from "../api/firebase"
import { firebaseApp } from "../api/firebase";

const onSubmit = (emil, password) => {
   return firebaseApp.auth().signInWithEmailAndPassword(emil, password)
}

export function Login(){
    return <>
    <Header/>
        <AuthTemplate link={<Link to="signup">Нету аккаунта. Пройти Регистрацию</Link>}>
        <LoginForm title="Login Form" submitButton="Login Button"
                   onSubmit={onSubmit}
        />
        </AuthTemplate>
    </>
}
