import { useState } from 'react'

import './App.css'
import VideoShowcase from './components/VideoShowcase'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <VideoShowcase />
      
    </>
  )
}

export default App
