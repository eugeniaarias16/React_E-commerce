
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { myNewTheme } from './styles/globalTheme.js'
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

createRoot(document.getElementById('root')).render(
  <ChakraProvider value={myNewTheme}>
    <StyledThemeProvider theme={myNewTheme}>
      <App />
    </StyledThemeProvider>
  </ChakraProvider>
)
