import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
      <Button colorScheme={'normal'}>Button</Button>
  )
}

export default App
