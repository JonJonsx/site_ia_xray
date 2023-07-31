import React from 'react';
import './styles/global.css'

import { Outlet } from 'react-router-dom';
import SideBar from './components/SideBar/SideBar';
import { Flex } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <Flex>
        <SideBar />
        <Outlet />
      </Flex>
    </div >
  );
}

export default App;
