import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-3xl font-bold flex justify-center p-10'>
        Namaste Everyone, let's build Netflix GPT
      </div>
    </>
  )
}

export default App
