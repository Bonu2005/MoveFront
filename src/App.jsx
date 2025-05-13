import { useState } from 'react'
import './App.css'
import MainRouters from './pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <MainRouters/>
    </>
  )
}

export default App
