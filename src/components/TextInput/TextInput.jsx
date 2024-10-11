import { useState } from "react";

function TextInput({updateMessage, user}){
    const [userMessage, setUserMessage] = useState('')

    function updateUserMessage(value){
        setUserMessage(value)
        console.log(user)
    }
    return (
        <>
        {/* <input placeholder="who's sending this message?" id="username"></input> */}
        <input placeholder="write message here" id="newMessage" onChange={(e)=>{updateUserMessage(e.target.value)}}></input>
        <button onClick={()=>{updateMessage(userMessage)}}>submit</button>
        </>
    )
}

export default TextInput;