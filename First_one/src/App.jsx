import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>Up
          {/* count is {count} */}
        </button>
        <p>
          count is {count}
        </p>
        <button onClick={() => setCount(count => count - 1)}>Down</button>
      </div>
      <p className="read-the-docs">
        MOnil
      </p>
    </>
  )
}

export default App
