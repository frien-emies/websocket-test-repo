import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Message from './components/Message/Message'
import TextInput from './components/TextInput/TextInput'

function App() {
  const [message, setMessage] = useState('')

  return (
    <>
    <Message/>
    <TextInput/>
    </>
  )
}

export default App
