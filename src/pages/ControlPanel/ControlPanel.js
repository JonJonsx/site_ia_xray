import React from "react";
import { Flex } from "@chakra-ui/react";
import Resultados from "../Resultados/Resultados";
import AddExame from "../../components/AddExame/AddExame";

function ControlPanel() {
    return (
        <Flex 
            w="100%"
            mr={2}
            className="ControlPanel"
            justifyContent="space-between">
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