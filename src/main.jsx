
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { myNewTheme } from './styles/globalTheme.js'
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { CartProvider } from './context/CartContext.jsx';

createRoot(document.getElementById('root')).render(
  <ChakraProvider value={myNewTheme}>
    <StyledThemeProvider theme={myNewTheme}>
      <CartProvider>
        <App />
      </CartProvider>
    </StyledThemeProvider>
  </ChakraProvider>
)
