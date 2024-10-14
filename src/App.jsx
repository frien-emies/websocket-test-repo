import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Message from './components/Message/Message'
import TextInput from './components/TextInput/TextInput'
import { socket } from './socket.js'

function App() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([]);
  // const [users, setUsers] = useState([1,2])

  function sendMessage (username, message){
    socket.emit("message_client", {"username": username, "message": message})
  }
  function updateMessage(newMessage, user){
    let newMessages = [...message]
    if (user === 1){
      newMessages = [newMessage,newMessages[1]]
    } else {
      newMessages = [newMessages[0],newMessage]
    }
    setMessage(newMessages)
    console.log(message)
  };

  function handleChange(e) {
    setMessage(() => e.target.value);

  }

  function handleSubmit(e) {
    e.preventDefault();
    sendMessage('SeFF', message)
    setMessages(prev => [...prev, 'FE:' + message]);
    setMessage(() => '')
  }

  useEffect(()=>{
    socket.on("connect", ()=>{
      console.log("Connected to WebSocket server")
    })

    socket.on("message", (data)=>{
      console.log('Message from the other side....', 'BE:' + JSON.stringify(data))
      setMessages(prev => [...prev, 'BE:' + JSON.stringify(data)]);
    });

    //return socket.disconnect();
  },[])

  return (
    <>
    <form onSubmit={handleSubmit}>
    {/* <Message message = {message[0]}/>
    <Message message = {message[1]}/>
    <TextInput user = {users[0]} updateMessage = {updateMessage}/>
    <TextInput user = {users[1]} updateMessage = {updateMessage}/> */}
    <input placeholder="who's sending this message?" id="username" onChange={handleChange}></input>
    <button>send</button>
    </form>
    <ul>{messages.map((msg, idx) => (<li key={idx + 'msg' + 'li'}>{msg}</li>))}</ul>
    </>
  )
}

export default App
