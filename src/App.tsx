import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(5)

  return (
    <>
      <div>
      </div>
      <h1>Esto es un contador </h1>
      <div >
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
          
        </button>
     
      </div>
    
    </>
  )
}

export default App
