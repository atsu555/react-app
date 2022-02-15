import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { HashRouter } from 'react-router-dom';

import theme from "./theme/theme";
import { Router } from "./router/Router";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <HashRouter>
      <Router />
      </HashRouter>
    </ChakraProvider>
  );

}

export default App;
