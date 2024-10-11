import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Message from './components/Message/Message'
import TextInput from './components/TextInput/TextInput'

function App() {
  const [message, setMessage] = useState(['',''])
  const [users, setUsers] = useState([1,2])

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

  return (
    <>
    <Message message = {message[0]}/>
    <Message message = {message[1]}/>
    <TextInput user = {users[0]} updateMessage = {updateMessage}/>
    <TextInput user = {users[1]} updateMessage = {updateMessage}/>
    </>
  )
}

export default App
