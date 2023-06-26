import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import { Flex } from "@chakra-ui/react";
import Resultados from "../Resultados/Resultados";
import AddExame from "../../components/AddExame/AddExame";

function ControlPanel() {
    return (
        <Flex 
            className="ControlPanel"
            justifyContent="space-between">
            <SideBar />
            <Flex
              flexDirection="column"
              w="100%"
              >
              <AddExame />
              <Resultados />
            </Flex>
        </Flex>
    )
    }

export default ControlPanel;