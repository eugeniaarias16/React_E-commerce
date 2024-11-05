import { ChakraProvider } from '@chakra-ui/react';
import { useState } from 'react';
import {NavBar} from './components/NavBar'
import { MainLayOut } from './LayOuts'; 


function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <MainLayOut> 
    
  </MainLayOut>
  </>
  
  )
}

export default App
