import {useState} from "react";
import {Button, Input, makeStyles} from "@material-ui/core";



export function LoginForm({title, submitButton, onSubmit}){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const styles = useStyles()
    return <div className={styles.root}>
        <h1>{title}</h1>
        <Input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder={"Email..."}
            fullWidth={true}
            className={styles.input}/>
        <Input
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder={"Password..."}
            type="password"
            fullWidth={true}
            className={styles.input}/>
        <Button
            fullWidth={true}
            onSubmit={onSubmit}
        >{submitButton}</Button>
    </div>
}

const useStyles = makeStyles(() => {
    return{
        input:{
            color:"#9a9fa1",
            padding:"10px 15px",
            fontSize:"15px",
            marginBottom:15,
        },
        root:{
            "& h1":{
                fontSize: 25,
                fontWight:"bold",
                marginBottom: 50
            }
        }
    }
})
