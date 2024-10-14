import { useState } from "react";

function TextInput({updateMessage, user}){
    const [userMessage, setUserMessage] = useState('')

    function updateUserMessage(value, user){
        setUserMessage(value, user)
    }
    return (
        <>
        {/* <input placeholder="who's sending this message?" id="username"></input> */}
        <input placeholder="write message here" id="newMessage" onChange={(e)=>{updateUserMessage(e.target.value)}} value={userMessage}></input>
        <button onClick={()=>{updateMessage(userMessage, user)}}>submit</button>
        </>
    )
}

export default TextInput;