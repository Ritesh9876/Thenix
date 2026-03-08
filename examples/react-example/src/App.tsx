import { useState } from 'react'
import './App.css'
import { QueryClientProvider, useQueryClient, QueryClient } from '@thenix/react'
import UserData from './userdata'

console.log('**/imports working ',QueryClientProvider, useQueryClient)

const queryClient = new QueryClient()
function App() {
  const [count, setCount] = useState(0)

  return (
    <QueryClientProvider client={queryClient}>
    <>
      <div>
        <UserData/>
      </div>
      <h1>test context access</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
       test context access
      </p>
    </>
    </QueryClientProvider>
  )
}

export default App
