import './App.css';
import {useState, useEffect} from "react"

export function App() {
    const [messages, setMessage] = useState([
        { value: "hello", author: "tester" }
    ])
    const [value, setValue] = useState("")

    useEffect(()=>{
        const ifUser = messages[messages.length - 1]
        if(ifUser?.author !== "bot"){
            setTimeout(()=>{
                    setMessage(state => [...state, {value: "bot message", author: "bot"}])
                }, 1500)
        }
        // let botAnswer = setTimeout(()=>{
        //     setMessage(state => [...state, {value: "bot message", author: "bot"}])
        // }, 1500)

        return()=>{
            clearTimeout()
        }
    }, [messages])


  return (
    <div className="App">
    <h1>testing messages</h1>
        <ul>
            {messages.map((message, id) => (
                <li key={id}>
                    {message.value} - {message.author}
                </li>
            ))}
        </ul>
        <input type="text"
               value={value}
               onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => {
            setMessage(state => [...state, {value, author: "Sender"}])
            setValue("")
        }}
        >
            send
        </button>
    </div>
  );
}

