import { useState } from 'react'
import './App.css'
import Movieshop from './components/Movieshop'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Movieshop/>
    </>
  )
}

export default App
