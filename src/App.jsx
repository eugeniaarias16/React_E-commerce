import { ChakraProvider } from '@chakra-ui/react';
import { useState } from 'react';
import {NavBar} from './components/NavBar'


function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <NavBar/>
  </>
  
  )
}

export default App
