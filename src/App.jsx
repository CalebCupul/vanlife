import { useState } from 'react'
import './App.css'
import './server'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-slate-500 '>
      App component
    </div>
  )
}

export default App
