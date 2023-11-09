import React from 'react';
import './styles/global.css'
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./Keycloak"
import { Outlet } from 'react-router-dom';
import SideBar from './components/SideBar/SideBar';
import { Flex } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <ReactKeycloakProvider authClient={keycloak}>
        <Flex>
          <SideBar />
          <Outlet />
        </Flex>
      </ReactKeycloakProvider>
    </div >
  );
}

export default App;
