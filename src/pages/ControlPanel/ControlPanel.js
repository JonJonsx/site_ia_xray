import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import { Flex } from "@chakra-ui/react";
import Resultados from "../Resultados/Resultados";

function ControlPanel() {
    return (
        <Flex 
            className="ControlPanel"
            justifyContent="space-between">
            <SideBar />
            <Resultados />
        </Flex>
    )
    }

export default ControlPanel;