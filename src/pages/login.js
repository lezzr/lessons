import { LoginForm, AuthTemplate} from "../components";
import {Link} from "react-router-dom";
// import {firebaseApp} from "../api/firebase"
import { firebaseApp } from "../api/firebase";

const onSubmit = (email, password) => {
   return firebaseApp.auth().signInWithEmailAndPassword(email, password)
}

export function Login(){
    return <>
        <AuthTemplate link={<Link to="signup">Нету аккаунта. Пройти Регистрацию</Link>}>
        <LoginForm title="Login Form" submitButton="Login Button"
                   onSubmit={onSubmit}
        />
        </AuthTemplate>
    </>
}
