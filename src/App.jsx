import { ChakraProvider } from '@chakra-ui/react';
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MainLayOut } from './LayOuts';
import { CategoriesComponent } from './components';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <MainLayOut />
      </Router>
    </>

  )
}

export default App
