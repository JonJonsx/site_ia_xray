import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from "@chakra-ui/react"
import AppWithRouterAccess from './routes'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode> //Causando conflito no keycloak
    <ChakraProvider>
      <AppWithRouterAccess />
    </ChakraProvider>
  //</React.StrictMode>
);