import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Message from './components/Message/Message'
import TextInput from './components/TextInput/TextInput'
import { sendMessage, socket } from '../utils/socket'
import { getMessage } from '../utils/apiCalls'

function App() {
  const [message, setMessage] = useState(['',''])
  const [users, setUsers] = useState(['1','2'])


  function updateMessage(newMessage, user){
    
    let newMessages = [...message]
    if (user === '1'){
      newMessages = [newMessage,newMessages[1]]
    } else if (user === '2') {
      newMessages = [newMessages[0],newMessage]
    }
 
    setMessage(newMessages)
  };


  useEffect(()=>{
    socket.connect()
    socket.on("message", (data)=>{
      updateMessage(data.split(':')[1], data.split(':')[0])
    })
  },[])

  return (
    <>
    <Message message = {message[0]}/>
    <Message message = {message[1]}/>
    <TextInput user = {users[0]}/>
    <TextInput user = {users[1]}/>
    
    </>
  )
}

export default App
