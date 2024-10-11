import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Message from './components/Message/Message'
import TextInput from './components/TextInput/TextInput'

function App() {
  const [message, setMessage] = useState('hi')
  const [users, setUsers] = useState([1,2])
  function updateMessage(newMessage){
    setMessage(newMessage)
  };

  return (
    <>
    <Message message = {message}/>
    <TextInput user = {users[0]} updateMessage = {updateMessage}/>
    <TextInput user = {users[1]} updateMessage = {updateMessage}/>
    </>
  )
}

export default App
