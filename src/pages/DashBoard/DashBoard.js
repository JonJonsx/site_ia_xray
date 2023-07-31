import React from "react";
import { Flex } from "@chakra-ui/react";

function DashBoard() {
    return (
        <Flex 
            w="100%"
            className="ControlPanel"
            justifyContent="space-between">
            <Flex
              flexDirection="column"
              w="100%"
              >
            </Flex>
        </Flex>
    )
}

export default DashBoard;