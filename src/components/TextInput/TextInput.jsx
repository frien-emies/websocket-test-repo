import { useState } from "react";
import { sendMessage } from "../../../utils/socket";

function TextInput({user}){
    const [userMessage, setUserMessage] = useState('')

    function updateUserMessage(value, user){
        setUserMessage(value, user)
    }
    return (
        <>
        {/* <input placeholder="who's sending this message?" id="username"></input> */}
        <input placeholder="write message here" id="newMessage" onChange={(e)=>{updateUserMessage(e.target.value)}}></input>
        <button id={`${user}`} onClick={(e)=>{sendMessage(e.target.id, userMessage)}}>submit</button>
        </>
    )
}

export default TextInput;