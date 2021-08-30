import {LoginForm, AuthTemplate} from "../components";
import {Link} from "react-router-dom";
import {firebaseApp} from "../api/firebase";

const onSubmit = (email, password) => {
    console.log(email, password)
    return firebaseApp.auth().createUserWithEmailAndPassword(email, password)
}

export function SignUp(){
    return <>
        <AuthTemplate link={<Link to="login">Есть аккаунт? Войти</Link>}>
            <LoginForm title="Register Form" submitButton="Register Button"
                       onSubmit={onSubmit}
            />
        </AuthTemplate>
    </>
}
