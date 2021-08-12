import {useCallback, useEffect, useMemo, useState} from "react";
import {useParams} from "react-router-dom"

export function MessageProvider({children}){
    const { roomId } = useParams()
    const [conversations, setConversations] = useState([
        {title:"room1", value:""},
        {title:"room2", value:""},
        {title:"room3", value:""}
    ])
    const [messages, setMessages] = useState({
        room1:[{ value: "hello", author: "tester" }],
        room2:[{ value: "hello2", author: "tester" }],
        room3:[{ value: "hello33", author: "tester" }]

    })

    const updateConversations = useCallback(
        (value = "") => {
            setConversations((conversations) =>
            conversations.map((conversation) => {
                return conversation.title === roomId
                ?{...conversation, value}
                    : conversation
            }),
            )
        },
        [roomId]
    )

    const state = useMemo(()=>{
        return{
            conversations,
            allMessages: messages,
            messages: messages[roomId] || [],
            value:
                conversations.find((conversation) => conversation.title === roomId)
                    ?.value || "",}
    },[conversations, messages, roomId])
    const actions = useMemo(() => {
        return{
            sendMessage:(message) =>{
                const newMessage = {...message, id: new Date()}
                setMessages((messages)=> {
                    return{
                        ...messages,
                        [roomId]: [...(messages[roomId] || []), newMessage]
                    }
                })
                updateConversations()
            },
            handleChangeValue: (e) => {
                const { value } = e.target

                updateConversations(value)
            },
        }
    }, [roomId, updateConversations])

    useEffect(()=>{
        let timerId = null
        const lastMessage = messages[roomId][messages[roomId].length - 1]


        if (lastMessage?.author !== "bot"){
            timerId = setTimeout(
                ()=> actions.sendMessage({message: `Hello im bot from ${roomId}`, author: "bot"}),
                9000
            )
        }
        return ()=> clearInterval(timerId)
    }, [messages, roomId, actions])

    console.log(messages[roomId])

    return children([state, actions])
}
