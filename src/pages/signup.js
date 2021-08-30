import {Header, LoginForm, AuthTemplate} from "../components";
import {Link} from "react-router-dom";
// import { firebaseApp } from "../api/firebase.js";
// import {firebaseApp} from "../api/firebase";

// const onSubmit = (emil, password) => {
//     return firebaseApp.auth().createUserWithEmailAndPassword(emil, password)
// }

export function SignUp(){
    return <>
        <Header/>
        <AuthTemplate link={<Link to="login">Есть аккаунт? Войти</Link>}>
            <LoginForm title="Register Form" submitButton="Register Button"
                       // onSubmit={onSubmit}
            />
        </AuthTemplate>
    </>
}
